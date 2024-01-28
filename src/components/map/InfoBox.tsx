import { StoreType } from "@/constant/interface";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { AiOutlineCheck, AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineMapPin } from "react-icons/hi2";

interface InfoBoxProps {
    selectedStore: StoreType | null,
    setSelectedStore: Dispatch<SetStateAction<StoreType | null>>
}

export default function InfoBox({ selectedStore, setSelectedStore }: InfoBoxProps) {

    const clearSelected = () => setSelectedStore(null)
    const goToDeatilPage = () => {
        // TODO : 상세페이지로 이동
    }

    return <div className="fixed transititon ease-in-out delay-100 inset-x-0 mx-auto bottom-20 rounded-md shadow-md max-w-sm md:max-w-xl z-10 bg-white w-full">
        {selectedStore &&
            <div>
                <div className="px-4 py-3">
                    <div className="flex justify-between items-start">

                        <Image src={`/images/marker/${selectedStore?.bizcnd_code_nm ?? 'defalut'}.png`} width={30} height={30} alt="selected-store" />

                        <div className="w-full mx-5">
                            <p className="font-semibold text-black">{selectedStore.upso_nm}</p>
                            <p className="text-sm text-black">{selectedStore.cob_code_nm}</p>
                        </div>

                        <button onClick={clearSelected}><AiOutlineClose className="text-black" /></button>

                    </div>

                    <div className="mt-2 flex items-center text-black">
                        <button><HiOutlineMapPin className="mr-3" /></button>
                        <span>{selectedStore?.rdn_code_nm}</span>
                    </div>

                    <div className="mt-2 flex items-center text-black">
                        <button><AiOutlineInfoCircle className="mr-3" /></button>
                        <span>{selectedStore?.crtfc_gbn_nm}</span>
                    </div>

                    <div className="mt-2 flex items-center text-black">
                        <button><AiOutlineCheck className="mr-3" /></button>
                        <span>{selectedStore?.bizcnd_code_nm}</span>
                    </div>
                </div>

                <button type="button" onClick={goToDeatilPage}
                className="mt-1 py-2 w-full bg-sky-700 hover:bg-sky-500 px-3 text-white font-semibold rounded-b-lg">
                    상세보기
                </button>
            </div>
        }
    </div>
}