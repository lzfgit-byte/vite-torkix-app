interface webInfoType {
    href: string;
    name: string;
    show?: boolean;
    icon?: string;
    type?: string;
}

export default function getWebData() {
    const webInfos: webInfoType[] = [
        {
            href: 'https://www.163.com/',
            name: '网易',
            show: false,
            icon: 'public/icons/wangyi.png',
        },
        { href: 'https://v2hx.github.io/', icon: 'public/icons/hx.ico', name: '红杏' },
        {
            href: 'https://tool.chinaz.com/tools/imgtobase',
            icon: 'public/icons/zzgj.png',
            name: '站长工具',
        },
        { href: 'https://v4speed.com/#/login', name: 'v4speed' },
        {
            href: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox',
            icon: 'public/icons/gmail.png',
            name: 'Gmail',
        },
        {
            href: 'https://outlook.live.com/mail/0/inbox',
            icon: 'public/icons/outlook.png',
            name: 'Outlook',
        },
        {
            href: 'https://mega.nz/folder/6wxFGQ6B#KkTVZbNNJDLyDesnBtE4Bw',
            icon: 'public/icons/mega.png',
            name: 'dulelink',
        },
        { href: 'https://www.yikm.net/', icon: 'public/icons/fc.png', name: 'fc' },
        { href: 'https://www.manhuacat.com/', name: '漫画猫' },
        {
            href: 'https://switchtools.sshnuke.net/',
            icon: 'public/icons/toolsw.png',
            name: 'toolsForSw',
        },
        {
            href: 'https://darthsternie.net/switch-firmwares/',
            name: 'swFirm',
        },
        { href: 'http://gbtgame.ys168.com/', icon: 'public/icons/wangyi.png', name: 'GBT' },
        { href: 'https://www.google.com/sky/', icon: 'public/icons/wangyi.png', name: 'GoogleSky' },
        { href: 'https://www.dandanzan.top/', icon: 'public/icons/wangyi.png', name: '蛋蛋赞' },
        {
            href: 'http://www.8hyyw.com/',
            icon: 'public/icons/wangyi.png',
            show: false,
            name: '8号影院',
        },
        { href: 'https://www.555dy.info/', icon: 'public/icons/wangyi.png', name: '555影院' },
        { href: 'http://www.tvyan.com/', name: '电视眼', icon: 'public/icons/wangyi.png' },
        { href: 'http://dyxs8.com/', name: '电影先生', icon: 'public/icons/wangyi.png' },
        { href: 'https://axutongxue.com/', name: '储物间', icon: 'public/icons/wangyi.png' },
        {
            href: 'http://yck.mumuceo.com/',
            name: '阅读源',
            icon: 'public/icons/wangyi.png',
            show: false,
        },
        { href: 'https://www.cupfox.com/', name: '茶杯狐', icon: 'public/icons/wangyi.png' },
        {
            href: 'https://startpage.com/sp/search/',
            name: 'startpage',
            icon: 'public/icons/wangyi.png',
        },
        { href: 'https://dsxys.com/', name: '大师兄影视', icon: 'public/icons/wangyi.png' },
    ];
    return { webInfos };
}
