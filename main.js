
//GLOBAL SCOPE VARIABLES
const bill = document.querySelector("#userinput1");

const five_p = document.querySelector(".josa"); 
const ten_p = document.querySelector(".josb");           const dis1 = document.querySelector("#dis1");
const fifteen_p = document.querySelector(".josc"); 
const twentyfive_p = document.querySelector(".josd");    const dis2 = document.querySelector("#dis2");
const fifty_p = document.querySelector(".jose"); 
                                                         const go = document.querySelector(".go");
const nop = document.querySelector("#userinput2"); 



// FUNCTIONS GLOBAL SCOPE
function func5() {
 five_p.value = "0.15";
 return (parseFloat(five_p.value));    
};
function func10() {
    ten_p.value = "0.10";
 return (parseFloat(ten_p.value));
};
function func15() {
    fifteen_p.value = "0.15";
 return (parseFloat(fifteen_p.value));
};
function func25() {
    twentyfive_p.value = "0.25";
 return (parseFloat(twentyfive_p.value));
};
function func50() {
    fifty_p.value = "0.50";
 return (parseFloat(fifty_p.value));
};



// LOCAL scope
const amarock = () => {

    const pbill = parseFloat(bill.value);
    const pnop = parseFloat(nop.value);

    const calc1 = () => {
    const ta = pbill*func5()/pnop;
    const to = pbill/pnop+ta;
    dis1.textContent = "$" + ta.toFixed(2);
    dis2.textContent = "$" + to.toFixed(2);          
};

    const calc2 = () => {
    const ta = pbill*func10()/pnop;
    const to = pbill/pnop+ta;
    dis1.textContent = "$" + ta.toFixed(2);
    dis2.textContent = "$" + to.toFixed(2);    
};

    const calc3 = () => {
    const ta = pbill*func15()/pnop;
    const to = pbill/pnop+ta;
    dis1.textContent = "$" + ta.toFixed(2);
    dis2.textContent = "$" + to.toFixed(2);    
};

    const calc4 = () => {
    const ta = pbill*func25()/pnop;
    const to = pbill/pnop+ta;
    dis1.textContent = "$" + ta.toFixed(2);
    dis2.textContent = "$" + to.toFixed(2);    
};

   const calc5 = () => {
    const ta = pbill*func50()/pnop;
    const to = pbill/pnop+ta;
    dis1.textContent = "$" + ta.toFixed(2);
    dis2.textContent = "$" + to.toFixed(2);    
};
   
      if (!pbill || !pnop) {
        const reddisplay2 = document.querySelector(".reddisplay2");
        reddisplay2.textContent = "can't be zero or letters";
        reddisplay2.style.color = "red";

        const reddisplay1 = document.querySelector(".reddisplay1");
        reddisplay1.textContent = "can't be zero or a letter";
        reddisplay1.style.color = "red";
    } else {

        let key ;
        
       five_p.addEventListener("click", (pump1) => {
                 const key = 1;
       });
       ten_p.addEventListener("click", (pump2) => {
                const key = 2;
       });
       fifteen_p.addEventListener("click", (pump3) => {
                const key = 3;
       });
       twentyfive_p.addEventListener("click", (pump4) => {
                const key = 4;
       });
       fifty_p.addEventListener("click", (pump5) => {
                const key = 5;
       });

       if ( key = 1 ) {
            calc1();
       } else if ( key = 2 ) {
            calc2();
       } else if (key = 3) {
            calc3();
       } else if ( key = 4 ) {
            calc4();
       } else if ( key = 5 ) {
            calc5();
       };

    } 
}


















