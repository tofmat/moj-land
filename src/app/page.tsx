import {
    Additem,
    Airpods,
    Apple,
    Chart1,
    DiscountCircle,
    EmptyWallet,
    Facebook,
    Flash,
    GooglePlay,
    KeyboardOpen,
    Lifebuoy,
    Mobile,
    People,
    Profile2User,
    ShieldTick,
    StatusUp,
    Youtube,
} from "iconsax-react";
import HeroImg from "../assets/svg/hero-img.svg";
import QrCode from "../assets/svg/qr-code.svg";
import FooterImg from "../assets/svg/footer-img.svg";
import FooterLogo from "../assets/svg/footer-logo.svg";
import Image from "next/image";
export default function Home() {
    return (
        <main className="">
            <div className=" max-w-[1920px] my-[4rem] mx-auto px-[8rem]">
                <div className="flex gap-[12px]">
                    <div className="w-[40%]">
                        <h1 className="text-[44px] text-[#121212] font-[700] leading-[54px]">
                            Discover and Trade Tokenized Digital Assets of Real
                            World Companies.
                        </h1>
                        <p className="text-[16px] text-[#2A2E33] font-[400] mt-8 leading-[21px]">
                            Mojaa exchange provides seamless access to a diverse
                            range of tokenized digital assets. Trade with
                            confidence, speed, and security while building your
                            wealth.
                        </p>
                        <div className="flex mt-8 items-center gap-4">
                            <div>
                                {" "}
                                <input
                                    type="text"
                                    placeholder="Email / Phone Number"
                                    className="w-[222px] text-[#CED6DE] p-4 border border-[#4DAA77] rounded-md items-center"
                                />
                            </div>
                            <button className="bg-[#4DAA77] p-4 w-[147px] font-[700] text-[#FFFFFF] rounded-[6px]">
                                Start Trading
                            </button>
                        </div>
                    </div>
                    <Image
                        src={HeroImg}
                        alt={"Hero-Image"}
                        className="w-[60%]"
                    />
                </div>
                <hr className="mt-9" />
                <div className="flex justify-between mt-5">
                    <div>
                        <h1 className="text-[#121212] text-[36px] font-[700]">
                            100k+
                        </h1>
                        <p className="mt-4 text-[#6D7786]">Investors</p>
                    </div>
                    <div>
                        <h1 className="text-[#121212] text-[36px] font-[700]">
                            300+
                        </h1>
                        <p className="mt-4 text-[#6D7786]">Market pairs</p>
                    </div>
                    <div>
                        <h1 className="text-[#121212] text-[36px] font-[700]">
                            $1.5M
                        </h1>
                        <p className="mt-4 text-[#6D7786]">24H Volume</p>
                    </div>
                    <div>
                        <h1 className="text-[#121212] text-[36px] font-[700]">
                            4.55K
                        </h1>
                        <p className="mt-4 text-[#6D7786]">Trades today</p>
                    </div>
                </div>
                <hr className="mt-5" />
                <div className="mt-[8rem]">
                    <div className=" text-center ">
                        <h1 className="font-[700] text-4xl">
                            We Exist to Make a Difference
                        </h1>
                        <p className="mt-4 text-[#6D7786]">
                            Explore the Features that set us apart from other
                            secondary markets, digital assets investment and
                            trading platforms{" "}
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-8 mt-12">
                        <div className=" bg-[#F5F8FA] p-6 rounded-[12px]">
                            <Chart1 size="28" color="#0D7FE9" />
                            <h1 className="mt-3">Self Custody Wallet</h1>
                            <p className="mt-2 text-[#6D7786]">
                                We let you take full control of your assets:
                                Only you have access to your trading funds with
                                our Self-Custody MPC Wallet.
                            </p>
                        </div>
                        <div className="bg-[#F5F8FA] p-6 rounded-[12px]">
                            <EmptyWallet size="28" color="#0D7FE9" />
                            <h1 className="mt-3">Extremely Low Fees</h1>
                            <p className="mt-2 text-[#6D7786]">
                                Maximize Your Returns: Enjoy the benefits of
                                extremely low fees, ensuring that more of your
                                hard-earned assets stay in your pocket as you
                                trade with confidence and efficiency.
                            </p>
                        </div>
                        <div className="bg-[#F5F8FA] p-6 rounded-[12px]">
                            <DiscountCircle size="28" color="#0D7FE9" />
                            <h1 className="mt-3">World Class Security</h1>
                            <p className="mt-2 text-[#6D7786]">
                                Peace of Mind in Every Trade: Our state of the
                                art security ensures your assets are safeguarded
                                and protected at all times while you trade.
                            </p>
                        </div>
                        <div className="bg-[#F5F8FA] p-6 rounded-[12px]">
                            <ShieldTick size="28" color="#0D7FE9" />
                            <h1 className="mt-3">Mobile Friendly</h1>
                            <p className="mt-2 text-[#6D7786]">
                                Trade Anywhere, Anytime: Our mobile-friendly app
                                puts the power of digital asset trading in the
                                palm of your hand, ensuring flexibility and
                                convenience on the go.
                            </p>
                        </div>
                        <div className="bg-[#F5F8FA] p-6 rounded-[12px]">
                            <Mobile size="28" color="#0D7FE9" />
                            <h1 className="mt-3">Refer and Earn</h1>
                            <p className="mt-2 text-[#6D7786]">
                                Grow Together: Refer and earn rewards, because
                                success is better when shared. Invite your
                                network to join, and enjoy the perks of building
                                wealth side by side.
                            </p>
                        </div>
                        <div className="bg-[#F5F8FA] p-6 rounded-[12px]">
                            <Profile2User size="28" color="#0D7FE9" />
                            <h1 className="mt-3">
                                Best Liquidity in the Market
                            </h1>
                            <p className="mt-2 text-[#6D7786]">
                                Dive into a sea of unparalleled liquidity –
                                where your trades flow seamlessly with the best
                                market liquidity available, ensuring swift and
                                efficient transactions.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-[8rem]">
                    <div>
                        <h1 className="font-[700] text-4xl">
                            Join the Future of Digital Assets Trading
                        </h1>
                        <p className="mt-8 text-[#6D7786] w-[70%]">
                            Ready to elevate your trading experience? Sign up
                            today and unlock a world of possibilities with our
                            cutting-edge platform. Here's why joining is your
                            next smart move
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-12 mt-14">
                        <div className="flex itens-center gap-4">
                            <div>
                                <Flash size="24" color="#0D7FE9" />
                            </div>

                            <div>
                                <p className="text-[#6D7786]">
                                    <span className="font-[700] pr-2 text-[#121212]">
                                        Seamless Start:
                                    </span>
                                    Maximize Your Returns: Enjoy the benefits of
                                    extremely low fees, ensuring that more of
                                    your hard-earned assets stay in your pocket
                                    as you trade with confidence and efficiency.
                                </p>
                            </div>
                        </div>
                        <div className="flex itens-center gap-4">
                            <div>
                                <People size="24" color="#0D7FE9" />
                            </div>

                            <div>
                                <p className="text-[#6D7786]">
                                    <span className="font-[700] pr-2 text-[#121212]">
                                        Community Engagement:
                                    </span>
                                    Connect with fellow traders, share insights,
                                    and stay updated on the latest market
                                    trends.
                                </p>
                            </div>
                        </div>
                        <div className="flex itens-center gap-4">
                            <div>
                                <StatusUp size="24" color="#0D7FE9" />
                            </div>

                            <div>
                                <p className="text-[#6D7786]">
                                    <span className="font-[700] pr-2 text-[#121212]">
                                        Real-Time Analytics:
                                    </span>
                                    Rest easy with our top-notch security
                                    measures, ensuring your assets are in safe
                                    hands.
                                </p>
                            </div>
                        </div>
                        <div className="flex itens-center gap-4">
                            <div>
                                <KeyboardOpen size="24" color="#0D7FE9" />
                            </div>

                            <div>
                                <p className="text-[#6D7786]">
                                    <span className="font-[700] pr-2 text-[#121212]">
                                        User-Friendly Interface:
                                    </span>
                                    Whether you're a seasoned trader or just
                                    starting, Mojaa is designed for intuitive
                                    and easy use.
                                </p>
                            </div>
                        </div>
                        <div className="flex itens-center gap-4">
                            <div>
                                <Mobile size="24" color="#0D7FE9" />
                            </div>

                            <div>
                                <p className="text-[#6D7786]">
                                    <span className="font-[700] pr-2 text-[#121212]">
                                        Anywhere, Anytime Trading:
                                    </span>
                                    Trade on the go with our mobile-friendly
                                    platform – your assets, your control,
                                    wherever you are.
                                </p>
                            </div>
                        </div>
                        <div className="flex itens-center gap-4">
                            <div>
                                <Lifebuoy size="24" color="#0D7FE9" />
                            </div>

                            <div>
                                <p className="text-[#6D7786]">
                                    <span className="font-[700] pr-2 text-[#121212]">
                                        Dedicated Support:
                                    </span>
                                    Our dedicated team is here to assist you at
                                    every step, ensuring a smooth and satisfying
                                    trading journey.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-14 bg-[#05AC701A] px-6 py-8">
                        <h1 className="text-[22px] leading-[30px] font-[600]">
                            Join a community of savvy traders. Your financial
                            journey starts here. Sign up now and take the first
                            step towards financial empowerment.
                        </h1>
                        <button className="bg-[#4DAA77] mt-8 p-4 w-[138px] font-[700] text-[#FFFFFF] rounded-[6px]">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-[#121A26]">
                <div className="max-w-[1920px] flex justify-between mx-auto px-[8rem] pt-[6rem] text-[#fff]">
                    <div className="">
                        <h1 className="text-4xl font-[700]">
                            Trade Anywhere, Anytime
                        </h1>
                        <p className="mt-6 w-[70%]">
                            Trade on the go with our mobile app – your assets,
                            your control, wherever you are.
                        </p>
                        <p className="mt-8 w-[70%]">
                            Download our mobile app for iOS and Android for
                            improved mobile experienced
                        </p>
                        <div className="flex mt-6 gap-3">
                            <button className="flex border px-2 gap-1 w-[180px] h-[45px] items-center border-[#fff] rounded-[6px]">
                                <Apple size="40" color="#FFF" variant="Bold" />
                                <div>
                                    <h1 className="text-[12px]">
                                        Download on the
                                    </h1>
                                    <span className="text-[18px] leading-[1px]">
                                        App Store
                                    </span>
                                </div>
                            </button>
                            <button className="flex border p-3 gap-1  w-[180px] h-[45px] items-center border-[#fff] rounded-[6px]">
                                <GooglePlay
                                    size="40"
                                    color="#FFF"
                                    variant="Bold"
                                />
                                <div>
                                    <h1 className="text-[12px]">GET IT ON</h1>
                                    <span className="text-[18px] leading-[1px]">
                                        Google Play
                                    </span>
                                </div>
                            </button>
                        </div>
                        <div className="mt-6">
                            <Image src={QrCode} alt={"QrCode"} />
                            <p className="mt-3">Scan to download</p>
                        </div>
                    </div>
                    <div className="">
                        <Image src={FooterImg} alt={"FooterImg"} />
                    </div>
                </div>
                <hr />
                <div className="mx-auto max-w-[1920px] px-[8rem] w-full justify-between flex pt-[6rem] pb-[8rem] text-[#FFF]">
                    <div className="">
                        {" "}
                        <Image src={FooterLogo} alt={"Footer-Logo"} />
                    </div>

                    <div className="flex w-[70%] justify-between gap-4 ">
                        <div className="gap-[40px] flex">
                            {" "}
                            <div className="">
                                <h1 className="font-[700]">Home</h1>
                                <p className="pt-3 text-[#CED6DE]">Markets</p>
                                <p className="pt-2 text-[#CED6DE]">FAQs</p>
                                <p className="pt-2 text-[#CED6DE]">
                                    Help Center
                                </p>
                            </div>
                            <div className="">
                                <h1>Contact</h1>
                                <p className="pt-3 w-[192px] text-[#CED6DE]">
                                    No. 3, Rabat Street, off Herbert Macaulay
                                    way, Wuse Zone 6, Abuja, Nigeria
                                </p>
                                <p className="pt-2 text-[#CED6DE]">
                                    enquiry@mojaa.exchange
                                </p>
                                <p className="pt-2 text-[#CED6DE]">
                                    Tel: +234 813 220 5304{" "}
                                </p>
                            </div>
                            <div className="">
                                <h1>Legal</h1>
                                <p className="pt-3 text-[#CED6DE]">
                                    Privacy policy
                                </p>
                                <p className="pt-2 text-[#CED6DE]">
                                    Terms of use
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="w-[348px]">
                                Download our mobile app for iOS and Android for
                                improved mobile experienced
                            </p>
                            <div className="flex mt-6 gap-3 ">
                                <button className="flex border px-2 gap-1 w-[180px] h-[45px] items-center border-[#fff] rounded-[6px]">
                                    <Apple
                                        size="40"
                                        color="#FFF"
                                        variant="Bold"
                                    />
                                    <div>
                                        <h1 className="text-[12px]">
                                            Download on the
                                        </h1>
                                        <span className="text-[18px] leading-[1px]">
                                            App Store
                                        </span>
                                    </div>
                                </button>
                                <button className="flex border p-3 gap-1  w-[180px] h-[45px] items-center border-[#fff] rounded-[6px]">
                                    <GooglePlay
                                        size="40"
                                        color="#FFF"
                                        variant="Bold"
                                    />
                                    <div>
                                        <h1 className="text-[12px]">
                                            GET IT ON
                                        </h1>
                                        <span className="text-[18px] leading-[1px]">
                                            Google Play
                                        </span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-[8rem] mx-auto max-w-[1920px] ">
                    <hr />
                    <div className="flex pt-6 pb-8 justify-between text-[#fff]">
                        <div>
                            <h1 className="text-[#8C97A7] text-[14px]">
                                © Mojaa 2024. All rights reserved
                            </h1>
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <Facebook
                                    size="20"
                                    color="#8C97A7"
                                    variant="Bold"
                                />
                            </div>
                            <div>
                                <Youtube
                                    size="20"
                                    color="#8C97A7"
                                    variant="Bold"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
