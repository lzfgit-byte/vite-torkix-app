import { strOrReStr } from '../components/navigation/type/navigation-types';

export interface webInfoType {
    href: string;
    name: string;
    show?: boolean;
    icon?: string;
    type?: string;
}
// img?: strOrReStr;
// title?: strOrReStr;
// href: string;
// type?: string;
export default function getWebData() {
    const webInfos: webInfoType[] = [
        { href: 'https://axutongxue.com/', name: '储物间', icon: '/icons/cwj.ico' },
        { href: 'https://meta.appinn.net/', icon: '/icons/xzrj.png', name: '小众软件' },
        { href: 'https://www.123pan.com/', icon: '/icons/123.png', name: '123网盘' },
        {
            href: 'https://mega.nz/folder/6wxFGQ6B#KkTVZbNNJDLyDesnBtE4Bw',
            icon: '/icons/mega.png',
            name: 'dulelink',
        },
        { href: 'https://www.yikm.net/', icon: '/icons/fc.png', name: 'fc' },
        { href: 'https://www.manhuacat.com/', name: '漫画猫' },
        {
            href: 'https://switchtools.sshnuke.net/',
            icon: '/icons/toolsw.png',
            name: 'toolsForSw',
        },
        {
            href: 'https://darthsternie.net/switch-firmwares/',
            name: 'swFirm',
        },
        { href: 'http://gbtgame.ys168.com/', name: 'GBT' },
        { href: 'http://www.tvyan.com/', name: '电视眼' },
    ];
    const aopDotData = [
        { img: '/icons/ytb.png', title: '影视聚合', href: '', type: 'toggleMovie' },
        { img: '/icons/tj.png', title: '推荐', href: '', type: 'toggleRecommend' },
        { img: '/icons/fc.png', title: 'FC在线', href: '', type: 'toFCLink' },
        { img: '/icons/calder.png', title: '日历', href: '', type: 'calendar' },
        { img: '/icons/yi.png', title: '疫情地图', href: '', type: 'showOutbreakMap' },
        { img: '/icons/ks.png', title: '看书', href: '', type: 'readSomething' },
    ];
    const movieAggre = [
        { href: 'https://www.dandanzan10.top/', name: '蛋蛋赞', icon: '/icons/ddz.png' },
        { href: 'https://www.nunuyy10.top/', name: '努努影视' },
        { href: 'https://www.dyxs8.com/', name: '电影先生' },
        { href: 'https://cupfox.app/', name: '茶杯狐' },
        { href: 'https://www.dm233.cc/', name: '233动漫' },
        { href: 'https://www.agemys.com/', name: 'age动漫' },
    ];
    const readingWebs = [
        { href: 'http://www.zoudupai.com/', name: '走读派' },
        { href: 'https://www.99csw.com/', name: '99藏书' },
    ];
    return { webInfos, aopDotData, movieAggre, readingWebs };
}

export const webH = [
    { href: 'https://thehentaiworld.com/', name: 'hword' },
    { href: 'https://rule34video.com/', name: 'rule34' },
    { href: 'https://18comic.vip/', name: '禁漫天堂' },
    { href: 'https://pornhub.com/', name: 'pornhub' },
    { href: 'https://www.xvideos.com/', name: 'xvideos' },
    { href: 'https://theporndude.com/zh', name: 'pornSit' },
    {
        href: 'https://www.whichav.video/zh-hans/1209.html',
        name: '导航',
    },
];
