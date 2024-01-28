/* global kakao */

import Script from "next/script"

declare global {
    interface Window {
        kakao: any
    }
}

// Reference : https://apis.map.kakao.com/web/guide/
export default function StoreMapPage() {
    const onReady = () => {
        window.kakao.maps.load(() => {
            const container = document.getElementById("map")
            const option = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                level: 3
            }
            new window.kakao.maps.Map(container, option)
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