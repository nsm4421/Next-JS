import Link from "next/link"

interface NavItem {
    href: string;
    label: string
}

const navItems : NavItem[] = [
    {
        href: "/stores",
        label: "가게목록"
    },
    {
        href: "/stores/create",
        label: "가게등록"
    },
    {
        href: "/stores/favorite",
        label: "찜한기게"
    },
    {
        href: "/users/login",
        label: "로그인"
    },
]

export default function Navbar() {

    return <div className="p-3 fixed w-full top-0 h-12 bg-slate-50 text-black flex justify-between items-center">
        <Link href={'/'}><span className="font-bold text-lg text-sky-700">맛집 지도</span></Link>

        <div className="inline max-sm:hidden">
            {
                navItems.map((i) =>
                    <button key={i.href} className="text-md rounded-sm hover:bg-sky-300 px-2 py-1">
                        <Link href={i.href}>
                            <span>{i.label}</span>
                        </Link>
                    </button>
                )
            }
        </div>
    </div>
}