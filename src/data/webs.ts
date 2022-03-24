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
        { href: 'https://axutongxue.com/', name: '储物间', icon: 'public/icons/cwj.ico' },
        {
            href: 'https://tool.chinaz.com/tools/imgtobase',
            icon: 'public/icons/zzgj.png',
            name: '站长工具',
        },
        {
            href: 'https://www.123pan.com/',
            icon: 'public/icons/123.png',
            name: '123网盘',
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
        { href: 'http://gbtgame.ys168.com/', name: 'GBT' },
        { href: 'http://www.tvyan.com/', name: '电视眼' },
    ];
    const aopDotData = [
        { img: '/public/icons/ytb.png', title: '影视聚合', href: '', type: 'toggleMovie' },
        { img: '/public/icons/fc.png', title: 'FC在线', href: '', type: 'toFCLink' },
    ];
    const movieAggre = [
        { href: 'https://www.dandanzan10.top/', name: '蛋蛋赞', icon: 'public/icons/ddz.png' },
        { href: 'https://www.nunuyy10.top/', name: '努努影视' },
        { href: 'https://www.dyxs8.com/', name: '电影先生' },
        { href: 'https://cupfox.app/', name: '茶杯狐' },
        { href: 'https://www.dm233.cc/', name: '233动漫' },
        { href: 'https://www.agemys.com/', name: 'age动漫' },
    ];
    return { webInfos, aopDotData, movieAggre };
}
