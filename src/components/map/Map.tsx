import Script from "next/script"
import { Dispatch, SetStateAction } from "react"

interface MapProps {
    setMap : Dispatch<SetStateAction<any>>
}

// gangnam station location
const DEFAULT_LAT = 37.497624203
const DEFAULT_LNG = 127.03088379

export default function Map({setMap}:MapProps) {
    const onReady = () => {
        window.kakao.maps.load(() => {
            const container = document.getElementById("map")
            const option = {
                center: new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
                level: 3
            }
            const map = new window.kakao.maps.Map(container, option)
            setMap(map)
        })
    }
    const appKey = process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT
    return <>
        <Script
            strategy="afterInteractive"
            type="text/javascript"
            onReady={onReady}
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`} />
        <div id="map" className="w-full h-screen"></div>
    </>
}