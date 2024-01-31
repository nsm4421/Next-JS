import { StoreType } from "@/constant/interface";
import Image from "next/image";

interface StorePageProps {
    stores: StoreType[];
}

export default function StorePage({ stores }: StorePageProps) {

    return <div className="px-3 md:max-w-5xl mx-auto py-5">
        <ul role="list" className="divide-y divide-gray-100">
            {
                stores?.map((store, index) =>
                    <li key={index} className="flex gap-x-6 py-5 justify-between mx-3 px-3 hover:bg-slate-900">
                        <div className="flex hover:cursor-pointer">
                            <Image src={`/images/marker/${store?.BIZCND_CODE_NM ?? 'defalut'}.png`} height={50} width={50} alt={`${index}th-image`} />
                            <div className="flex flex-col ml-4">
                                <span className="text-white font-bold">{store.UPSO_NM}</span>
                                <span className="text-slate-400 text-sm">{store.COB_CODE_NM}</span>
                            </div>
                        </div>
                        <div className="flex flex-col text-right">
                            <span className="text-white font-bold">{store.RDN_CODE_NM}</span>
                            <span className="text-slate-400 text-sm">{store.TEL_NO ?? '번호없음'}</span>
                        </div>
                    </li>
                )
            }
        </ul>
    </div>
}

export async function getServerSideProps() {
    const stores = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/store`).then(res => res.json())
    return {
        props: { stores }
    }
}