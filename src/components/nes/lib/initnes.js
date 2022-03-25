import { jsnes } from './index.js';

let holdNes = {};
var SCREEN_WIDTH = 256;
var SCREEN_HEIGHT = 240;
var FRAMEBUFFER_SIZE = SCREEN_WIDTH * SCREEN_HEIGHT;

var canvas_ctx, image;
var framebuffer_u8, framebuffer_u32;

var AUDIO_BUFFERING = 512;
var SAMPLE_COUNT = 4 * 1024;
var SAMPLE_MASK = SAMPLE_COUNT - 1;
var audio_samples_L = new Float32Array(SAMPLE_COUNT);
var audio_samples_R = new Float32Array(SAMPLE_COUNT);
var audio_write_cursor = 0,
    audio_read_cursor = 0;
var nes = new jsnes.NES({
    onFrame: function (framebuffer_24) {
        for (var i = 0; i < FRAMEBUFFER_SIZE; i++)
            framebuffer_u32[i] = 0xff000000 | framebuffer_24[i];
    },
    onAudioSample: function (l, r) {
        audio_samples_L[audio_write_cursor] = l;
        audio_samples_R[audio_write_cursor] = r;
        audio_write_cursor = (audio_write_cursor + 1) & SAMPLE_MASK;
    },
});

holdNes.nes = nes;

//浏览器更新页面时的回调
function onAnimationFrame() {
    nes.ui.updateStatus(parseInt(nes.getFPS()));
    window.requestAnimationFrame(onAnimationFrame);

    image.data.set(framebuffer_u8);
    canvas_ctx.putImageData(image, 0, 0);
}

function audio_remain() {
    return (audio_write_cursor - audio_read_cursor) & SAMPLE_MASK;
}

function audio_callback(event) {
    if (nes.rom == null) return;
    var dst = event.outputBuffer;
    var len = dst.length;

    // Attempt to avoid buffer underruns.
    if (audio_remain() < AUDIO_BUFFERING) nes.frame();

    var dst_l = dst.getChannelData(0);
    var dst_r = dst.getChannelData(1);
    for (var i = 0; i < len; i++) {
        var src_idx = (audio_read_cursor + i) & SAMPLE_MASK;
        dst_l[i] = audio_samples_L[src_idx];
        dst_r[i] = audio_samples_R[src_idx];
    }

    audio_read_cursor = (audio_read_cursor + len) & SAMPLE_MASK;
}
let player1Set = {
    BUTTON_A: 222,
    BUTTON_B: 186,
    BUTTON_SELECT: 32,
    BUTTON_START: 13,
    BUTTON_UP: 87,
    BUTTON_DOWN: 83,
    BUTTON_LEFT: 65,
    BUTTON_RIGHT: 68,
};
let player2Set = {
    BUTTON_A: 97,
    BUTTON_B: 98,
    BUTTON_SELECT: 100,
    BUTTON_START: 101,
    BUTTON_UP: 38,
    BUTTON_DOWN: 40,
    BUTTON_LEFT: 37,
    BUTTON_RIGHT: 39,
};
let nesSet = { reSet: 80, PauseAndStart: 82, save: 66, load: 77 };
!(function () {
    let temp = localStorage.getItem('player1Set');
    player1Set = temp != null && temp ? JSON.parse(temp) : player1Set;

    let temp2 = localStorage.getItem('player2Set');
    player2Set = temp2 != null && temp2 ? JSON.parse(temp2) : player2Set;

    let temp3 = localStorage.getItem('nesSet');
    nesSet = temp3 != null && temp3 ? JSON.parse(temp3) : nesSet;
})();
holdNes.player1Set = player1Set;
holdNes.player2Set = player2Set;
holdNes.nesSet = nesSet;

holdNes.saveThisKeyMap = function () {
    localStorage.setItem('player1Set', JSON.stringify(player1Set));
    localStorage.setItem('player2Set', JSON.stringify(player2Set));
    localStorage.setItem('nesSet', JSON.stringify(nesSet));
};

function keyboard(callback, event, isKeyDown) {
    var player1 = 1;
    var player2 = 2;
    holdNes.$vm ? (holdNes.$vm.CurrenKeyDown = event.keyCode) : console.log('未定义');
    switch (event.keyCode) {
        case player1Set.BUTTON_A:
            callback(player1, jsnes.Controller.BUTTON_A);
            break; // '
        case player1Set.BUTTON_B:
            callback(player1, jsnes.Controller.BUTTON_B);
            break; // ; (Central European keyboard) 89
        case player1Set.BUTTON_SELECT:
            callback(player1, jsnes.Controller.BUTTON_SELECT);
            break; // Spacebar Ctrl
        case player1Set.BUTTON_START:
            callback(player1, jsnes.Controller.BUTTON_START);
            break; // Enter
        case player1Set.BUTTON_UP:
            callback(player1, jsnes.Controller.BUTTON_UP);
            break; // W 38
        case player1Set.BUTTON_DOWN:
            callback(player1, jsnes.Controller.BUTTON_DOWN);
            break; // S 40
        case player1Set.BUTTON_LEFT:
            callback(player1, jsnes.Controller.BUTTON_LEFT);
            break; // A 37
        case player1Set.BUTTON_RIGHT:
            callback(player1, jsnes.Controller.BUTTON_RIGHT);
            break; // D 39

        case player2Set.BUTTON_A:
            callback(player2, jsnes.Controller.BUTTON_A);
            break; // Num-1
        case player2Set.BUTTON_B:
            callback(player2, jsnes.Controller.BUTTON_B);
            break; // Num-2
        case player2Set.BUTTON_SELECT:
            callback(player2, jsnes.Controller.BUTTON_SELECT);
            break; // Num-4
        case player2Set.BUTTON_START:
            callback(player2, jsnes.Controller.BUTTON_START);
            break; // Num-5
        case player2Set.BUTTON_UP:
            callback(player2, jsnes.Controller.BUTTON_UP);
            break; // Up 38
        case player2Set.BUTTON_DOWN:
            callback(player2, jsnes.Controller.BUTTON_DOWN);
            break; // Down 40
        case player2Set.BUTTON_LEFT:
            callback(player2, jsnes.Controller.BUTTON_LEFT);
            break; // Left 37
        case player2Set.BUTTON_RIGHT:
            callback(player2, jsnes.Controller.BUTTON_RIGHT);
            break; // Right 39

        case nesSet.reSet:
            if (event.type === 'keydown') {
                reStart();
            }
            break; // p 重启
        case nesSet.PauseAndStart:
            if (event.type === 'keydown') {
                toggleRunAndStart();
            }
            break; // r 暂停，继续
        case isKeyDown && nesSet.save:
            holdNes.$vm && holdNes.$vm.savePako();
            event.stopPropagation();
            event.preventDefault();
            break; // b 保存
        case isKeyDown && nesSet.load:
            holdNes.$vm && holdNes.$vm.loadPako();
            event.stopPropagation();
            event.preventDefault();
            break; // m 加载

        default:
            return true;
    }
}

function nes_init(canvas_id) {
    var canvas = document.getElementById(canvas_id);

    canvas_ctx = canvas.getContext('2d');
    image = canvas_ctx.getImageData(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    canvas_ctx.fillStyle = 'black';
    canvas_ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    // Allocate framebuffer array.
    var buffer = new ArrayBuffer(image.data.length);
    framebuffer_u8 = new Uint8ClampedArray(buffer);
    framebuffer_u32 = new Uint32Array(buffer);

    // Setup audio.
    if (!holdNes.alerdSet) {
        holdNes.alerdSet = true;
        var AudioContext = window.AudioContext || window.webkitAudioContext || false;
        var audio_ctx;
        if (AudioContext) {
            audio_ctx = new AudioContext({ sampleRate: nes.papu.sampleRate });
        } else {
            console.error('错误');
        }
        audio_ctx.resume();
        var script_processor = audio_ctx.createScriptProcessor(AUDIO_BUFFERING, 0, 2);
        script_processor['onaudioprocess'] = audio_callback;
        script_processor.connect(audio_ctx.destination);

        holdNes.audio_ctx = audio_ctx;
    }
    holdNes.screen = $(canvas);
}

function nes_boot(rom_data) {
    nes.loadROM(rom_data);
    window.requestAnimationFrame(onAnimationFrame);
}

function nes_load_data(canvas_id, rom_data) {
    nes_init(canvas_id);
    nes_boot(rom_data);
}

function nes_load_url(canvas_id, path) {
    nes_init(canvas_id);

    var req = new XMLHttpRequest();
    req.open('GET', path);
    req.overrideMimeType('text/plain; charset=x-user-defined');
    req.onerror = () => console.log(`Error loading ${path}: ${req.statusText}`);

    req.onload = function () {
        if (this.status === 200) {
            nes_boot(this.responseText);
        } else if (this.status === 0) {
            // Aborted, so ignore error
        } else {
            req.onerror();
        }
    };
    req.send();
}
holdNes.nes_load_url = nes_load_url;
holdNes.alerdSet = false;

function toggleVoice() {
    //holdNes.nes.opts.
}
function toggleRunAndStart() {
    if (holdNes.audio_ctx.state === 'running') {
        holdNes.audio_ctx.suspend();
    } else if (holdNes.audio_ctx.state === 'suspended') {
        holdNes.audio_ctx.resume();
    }
}

function reStart() {
    holdNes.nes.reloadROM();
}

document.addEventListener('keydown', (event) => {
    keyboard(nes.buttonDown, event, true);
});
document.addEventListener('keyup', (event) => {
    keyboard(nes.buttonUp, event);
});

function saveState() {
    if (nes.romData) {
        const o = nes.toJSON();
        const s = JSON.stringify(o);
        return s;
    }
    return null;
}
function loadState(z) {
    const o = JSON.parse(z);
    nes.fromJSON(o);
}
holdNes.saveState = saveState;
holdNes.loadState = loadState;

export { holdNes };
