/* global kakao */

import { useState } from "react"
import * as storeData from "@/data/store-location-data.json"
import Map from "@/components/map/Map"
import Markers from "@/components/map/Markers"
import { StoreType } from "@/constant/interface"
import InfoBox from "@/components/map/InfoBox"

declare global {
    interface Window {
        kakao: any
    }
}

// Reference : https://apis.map.kakao.com/web/guide/ß
export default function StoreMapPage() {

    const stores = storeData?.['DATA']
    const [map, setMap] = useState(null)
    const [selectedStore, setSeletedStore] = useState<StoreType|null>(null)

    return <div>
        <Map setMap={setMap} />
        <Markers map={map} stores={stores} setSelectedStore={setSeletedStore}/>
        <InfoBox selectedStore={selectedStore} setSelectedStore={setSeletedStore}/>
    </div>
}