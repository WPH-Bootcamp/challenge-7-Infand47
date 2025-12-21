import React from "react";
import Adobe from "/Adobe.svg";
import Airbnb from "/airbnb.svg";
import Amazon from "/databricks.svg";
import Dropbox from "/Dropbox.svg";
import Netflix from "/Netflix.svg";
import Paypal from "/Paypal.svg";
import Postman from "/postman.svg";
import Upwork from "/upwork.svg";
import Zoom from "/zoom.svg";

export const Company: React.FC = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="bg-black text-white company-section flex flex-col items-center relative p-10">
            {children}
            <p className="flex-center text-center relative self-stretch mt-[-1.00px] font-display-xs-bold"> Trusted by Global Innovators &amp; Leading Brands</p>
            <div className="flex flex-row justify-center gap-12 mt-8">
            <img src={Adobe} alt="Adobe" />
            <img src={Airbnb} alt="Airbnb" />
            <img src={Amazon} alt="Amazon" />
            <img src={Dropbox} alt="Dropbox" />
            <img src={Netflix} alt="Netflix" />
            <img src={Paypal} alt="Paypal" />
            <img src={Postman} alt="Postman" />
            <img src={Upwork} alt="Upwork" />
            <img src={Zoom} alt="Zoom" />
            </div>
        </div>
    );
}

export default Company;
