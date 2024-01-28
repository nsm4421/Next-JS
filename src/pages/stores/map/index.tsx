/* global kakao */

import Script from "next/script"
import * as stores from "@/data/store-location-data.json"

declare global {
    interface Window {
        kakao: any
    }
}

// gangnam station location
const DEFAULT_LAT = 37.497624203
const DEFAULT_LNG = 127.03088379

// Reference : https://apis.map.kakao.com/web/guide/
export default function StoreMapPage() {
    const onReady = () => {
        window.kakao.maps.load(() => {
            // create map
            const container = document.getElementById("map")
            const option = {
                center: new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
                level: 3
            }
            const map = new window.kakao.maps.Map(container, option)

            // marker
            stores?.['DATA']?.map((store) => {
                var position = new window.kakao.maps.LatLng(store?.y_dnts, store?.x_cnts);
                var image = new window.kakao.maps.MarkerImage(
                    `/images/marker/${store?.bizcnd_code_nm ?? 'default'}.png`,
                    new window.kakao.maps.Size(40, 40),
                    { offset: new window.kakao.maps.Point(25, 70) }
                )
                var marker = new window.kakao.maps.Marker({ position, image })
                marker.setMap(map)
            })
        })
    }
    const appKey = process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT


    return <div>
        <Script
            strategy="afterInteractive"
            type="text/javascript"
            onReady={onReady}
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`} />
        <div id="map" className="w-full h-screen"></div>
    </div>
}