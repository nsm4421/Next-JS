import { useCallback, useEffect } from "react";
import { Dispatch, SetStateAction } from "react"
import { StoreType } from "@/constant/interface";

interface MarkerProps {
    map: any;
    stores: StoreType[],
    setSelectedStore: Dispatch<SetStateAction<StoreType | null>>
}

export default function Markers({ map, stores, setSelectedStore }: MarkerProps) {

    const loadMakers = useCallback(() => {
        if (map) {
            stores?.map((store) => {
                // marker
                var position = new window.kakao.maps.LatLng(store?.Y_DNTS, store?.X_CNTS);
                var image = new window.kakao.maps.MarkerImage(
                    `/images/marker/${store?.BIZCND_CODE_NM ?? 'default'}.png`,
                    new window.kakao.maps.Size(40, 40),
                    { offset: new window.kakao.maps.Point(25, 70) }
                )
                var marker = new window.kakao.maps.Marker({ position, image })
                marker.setMap(map)

                // mouse hover event
                var content = `<div class="infowindow">${store?.UPSO_NM}</div>`
                var cusotmOverlay = new window.kakao.maps.CustomOverlay({
                    position, content, xAnchor: 0.6, yAnchor: 0.9
                })
                window.kakao.maps.event.addListener(marker, "mouseover", () => {
                    cusotmOverlay.setMap(map)

                })
                window.kakao.maps.event.addListener(marker, "mouseout", () => {
                    cusotmOverlay.setMap(null)
                })

                // on click marker
                window.kakao.maps.event.addListener(marker, "click", () => {
                    setSelectedStore(store)
                })
            })
        }
    }, [map, setSelectedStore])

    useEffect(() => {
        loadMakers()
    }, [loadMakers, map])

    return <></>
}