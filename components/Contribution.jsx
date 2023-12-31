'use client'

import useReceiptStore from "@context/receiptStore"
import { useRouter } from "next/navigation"
import ContributionField from "./ContributionField"

const Contribution = ( { total, contribution, reset } ) => {
    const router = useRouter()


    const handleFinish = () => {
        reset()
        router.push( "/" )
    }
    return (
        <section className='w-full max-w-full flex-start flex-col mb-16'>
            <h1 className='head_text text-left'><span className='orange_gradient'>Step 3: Contributions</span></h1>
            <br />
            <br />
            <div className='flex-start flex-col gap-3 sm:w-[50%] w-full glassmorphism'>
                <header className='flex justify-between w-full mb-4'>
                    <span className='sm:text-2xl text-base'><b>Member Name</b></span>
                    <span className='sm:text-2xl text-base'><b>Amount ($)</b></span>
                </header>
                { contribution.map( ( member, index ) => (
                    <ContributionField key={ index } name={ member.member } amount={ member.contribution } />
                ) ) }
                <footer className='flex justify-between w-full mt-4 px-1'>
                    <span className='sm:text-xl text-base'><b>Total</b></span>
                    <span className='sm:text-xl text-base'>${ total }</span>
                </footer>
            </div>
            <div className="flex-start my-10 w-1/2">
                <div className="black_btn cursor-pointer" onClick={ handleFinish }>Finish</div>
            </div>
        </section>
    )
}

export default Contribution