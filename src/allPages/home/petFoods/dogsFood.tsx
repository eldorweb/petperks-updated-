import { Link } from "react-router"
import { FoodMocdata } from "../../../mocData/FoodMocdata"
import { useEffect, useState } from "react"
import Loader from "../../../components/loader"


const DogsFood = () => {
    const dogs = FoodMocdata.filter(value => value.type === 'dogsFood')
    const [toggled, setToggled] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
        useEffect(()=>{
            window.scrollTo(0, 0); 
        },[])
    
        useEffect(() => {
            const fakeDataFetch = () => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            }
            fakeDataFetch();
        }, [])
        return (
        isLoading ? <Loader /> :
        <div className="">
            <div className="grid grid-cols-4 gap-[30px]">
                {
                    dogs.map((value) => {
                        return <div className='flex flex-col border-[1px] rounded-[30px] relative petfoods' >

                            <div className={`heart_div absolute right-4 top-4 heart cursor-pointer toggle-btn ${toggled ? "toggled" : " "}`} onClick={() => setToggled(!toggled)}>
                            <svg className="heart" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M17.3667 3.84124C16.9411 3.41541 16.4357 3.07761 15.8795 2.84714C15.3233 2.61667 14.7271 2.49805 14.1251 2.49805C13.523 2.49805 12.9268 2.61667 12.3706 2.84714C11.8144 3.07761 11.309 3.41541 10.8834 3.84124L10.0001 4.72457L9.11672 3.84124C8.25698 2.98149 7.09092 2.49849 5.87506 2.49849C4.6592 2.49849 3.49313 2.98149 2.63339 3.84124C1.77365 4.70098 1.29065 5.86704 1.29065 7.0829C1.29065 8.29876 1.77365 9.46483 2.63339 10.3246L3.51672 11.2079L10.0001 17.6912L16.4834 11.2079L17.3667 10.3246C17.7926 9.89894 18.1303 9.39358 18.3608 8.83736C18.5913 8.28115 18.7099 7.68497 18.7099 7.0829C18.7099 6.48083 18.5913 5.88465 18.3608 5.32844C18.1303 4.77222 17.7926 4.26686 17.3667 3.84124Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                            </div>
                            <div className="hoverCart flex-col absolute top-4 left-4  items-center justify-center opacity-0">
                                <div className="rounded-[12px] bg-[#FFEDE9] p-[5px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 9.25068H18.401L14.624 3.58468C14.394 3.23968 13.927 3.14568 13.584 3.37668C13.239 3.60668 13.146 4.07168 13.376 4.41668L16.599 9.25068H7.401L10.624 4.41668C10.854 4.07168 10.761 3.60668 10.416 3.37668C10.071 3.14668 9.606 3.23968 9.376 3.58468L5.599 9.25068H3C2.586 9.25068 2.25 9.58668 2.25 10.0007C2.25 10.4147 2.586 10.7507 3 10.7507H3.385L4.943 18.5397C5.199 19.8207 6.333 20.7507 7.64 20.7507H16.361C17.668 20.7507 18.801 19.8207 19.058 18.5397L20.616 10.7507H21.001C21.415 10.7507 21.751 10.4147 21.751 10.0007C21.751 9.58668 21.414 9.25068 21 9.25068ZM17.586 18.2457C17.469 18.8277 16.954 19.2507 16.36 19.2507H7.64C7.046 19.2507 6.531 18.8277 6.414 18.2457L4.915 10.7507H19.085L17.586 18.2457Z" fill="black" />
                                        <path d="M14.75 14V16C14.75 16.414 14.414 16.75 14 16.75C13.586 16.75 13.25 16.414 13.25 16V14C13.25 13.586 13.586 13.25 14 13.25C14.414 13.25 14.75 13.586 14.75 14ZM10 13.25C9.586 13.25 9.25 13.586 9.25 14V16C9.25 16.414 9.586 16.75 10 16.75C10.414 16.75 10.75 16.414 10.75 16V14C10.75 13.586 10.414 13.25 10 13.25Z" fill="black" />
                                    </svg>
                                </div>
                                <div className="rounded-[12px] bg-[#FFEDE9] p-[5px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M17.9869 10.3443C16.373 13.2425 13.3124 15.0429 10.0011 15.0429C6.68754 15.0429 3.62695 13.2425 2.01305 10.3443C1.88875 10.1193 1.88875 9.88141 2.01305 9.65656C3.62695 6.75844 6.68754 4.95828 10.0011 4.95828C13.3124 4.95828 16.373 6.75844 17.9869 9.65656C18.1134 9.88141 18.1134 10.1193 17.9869 10.3443ZM19.0179 9.08195C17.1961 5.8098 13.7411 3.77734 10.0011 3.77734C6.25887 3.77734 2.80391 5.8098 0.98211 9.08195C0.656329 9.66578 0.656329 10.3351 0.98211 10.9185C2.80391 14.1907 6.25887 16.2236 10.0011 16.2236C13.7411 16.2236 17.1961 14.1907 19.0179 10.9185C19.3436 10.3352 19.3436 9.66578 19.0179 9.08195ZM10.0011 12.4229C11.3363 12.4229 12.423 11.3362 12.423 10.0004C12.423 8.66445 11.3363 7.57781 10.0011 7.57781C8.66363 7.57781 7.57699 8.66445 7.57699 10.0004C7.57699 11.3362 8.66367 12.4229 10.0011 12.4229ZM10.0011 6.39687C8.01207 6.39687 6.39606 8.01355 6.39606 10.0004C6.39606 11.9877 8.01211 13.6037 10.0011 13.6037C11.9879 13.6037 13.6039 11.9876 13.6039 10.0004C13.6039 8.01355 11.9879 6.39687 10.0011 6.39687Z" fill="black" />
                                    </svg>
                                </div>
                                <div className="rounded-[12px] bg-[#FFEDE9] p-[5px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M20.531 5.4717L17.531 2.4717C17.238 2.1787 16.763 2.1787 16.47 2.4717C16.177 2.7647 16.177 3.2397 16.47 3.5327L18.19 5.2527H6.001C4.484 5.2527 3.251 6.4857 3.251 8.0027V11.0017C3.251 11.4157 3.587 11.7517 4.001 11.7517C4.415 11.7517 4.751 11.4157 4.751 11.0017V8.0027C4.751 7.3137 5.312 6.7527 6.001 6.7527H18.19L16.47 8.4727C16.177 8.7657 16.177 9.2407 16.47 9.5337C16.616 9.6797 16.808 9.7537 17 9.7537C17.192 9.7537 17.384 9.6807 17.53 9.5337L20.53 6.5337C20.823 6.2407 20.823 5.7657 20.53 5.4727L20.531 5.4717Z" fill="black" />
                                        <path d="M19 12.249C18.586 12.249 18.25 12.585 18.25 12.999V15.998C18.25 16.687 17.689 17.248 17 17.248H5.811L7.531 15.528C7.824 15.235 7.824 14.76 7.531 14.467C7.238 14.174 6.763 14.174 6.47 14.467L3.47 17.467C3.177 17.76 3.177 18.235 3.47 18.528L6.47 21.528C6.616 21.674 6.808 21.748 7 21.748C7.192 21.748 7.384 21.675 7.53 21.528C7.823 21.235 7.823 20.76 7.53 20.467L5.81 18.747H16.999C18.516 18.747 19.749 17.514 19.749 15.997V12.998C19.749 12.584 19.413 12.248 18.999 12.248L19 12.249Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                            <Link key={value.id} to={`./petFood/${value.id}`} className="cursor-pointer flex flex-col pb-[19px]">
                                <img src={value.menu.photo} className="rounded-t-[30px] h-[280px] w-[100%] object-fill object-center border-b-[1px] flex" alt='none' />
                                <div className="px-[19px] pt-[16px]">
                                    <h3 className="text-[15px] text-[#00000099] mb-1">{value.menu.subtitle || "none"}</h3>
                                    <h2 className="text-[#000] font-[lufga500] text-[16px] mb-[18px]">{value.menu.title}</h2>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <p className="text-[#000] text-[20px] font-[lufga500] mr-[5px]">{value.menu.sale}</p>
                                            <p className="text-[#00000066] text-[16px] font-[lufga400]">{value.menu.cost}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-[5px]" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                                <path d="M9 0L11.3805 5.72348L17.5595 6.21885L12.8518 10.2515L14.2901 16.2812L9 13.05L3.70993 16.2812L5.14822 10.2515L0.440492 6.21885L6.61947 5.72348L9 0Z" fill="#FFA048" />
                                            </svg>
                                            <p className="">4.5</p>
                                        </div>
                                    </div>
                                </div>

                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default DogsFood