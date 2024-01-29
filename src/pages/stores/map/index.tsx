/* global kakao */

import { useState } from "react"
import Map from "@/components/map/Map"
import Markers from "@/components/map/Markers"
import { StoreType } from "@/constant/interface"
import InfoBox from "@/components/map/InfoBox"

declare global {
    interface Window {
        kakao: any
    }
}

interface StoreMapProps {
    stores : StoreType[];
}

// Reference : https://apis.map.kakao.com/web/guide/ß
export default function StoreMapPage({stores}:StoreMapProps) {

    const [map, setMap] = useState(null)
    const [selectedStore, setSeletedStore] = useState<StoreType|null>(null)

    return <div>
        <Map setMap={setMap} />
        <Markers map={map} stores={stores} setSelectedStore={setSeletedStore}/>
        <InfoBox selectedStore={selectedStore} setSelectedStore={setSeletedStore}/>
    </div>
}

export async function getServerSideProps() {
    const stores = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/store`).then(res => res.json())
    return {
        props: { stores }
    }
}