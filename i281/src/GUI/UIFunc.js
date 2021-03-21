function switchKeystroke(swNum, actSw){
    var text = swNum.value;
    if(text == "1")
    {
        document.getElementById(actSw).checked = true;
    }
    else
    {
        document.getElementById(actSw).checked = false;
    }
    sevenSegUpdate(actSw);
}

function switchChange(actSw,swNum){
    var ch = actSw.checked;
    
    if(ch)
    {
        document.getElementById(swNum).value = '1';
    }
    else
    {
        document.getElementById(swNum).value = '0';
    }
    sevenSegUpdate(actSw);
}

var slider = document.getElementById("speedSld");
var output = document.getElementById("SimSpeed");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

document.getElementById("bit00").addEventListener("keydown", arrowWork);
document.getElementById("bit01").addEventListener("keydown", arrowWork);
document.getElementById("bit02").addEventListener("keydown", arrowWork);
document.getElementById("bit03").addEventListener("keydown", arrowWork);
document.getElementById("bit04").addEventListener("keydown", arrowWork);
document.getElementById("bit05").addEventListener("keydown", arrowWork);
document.getElementById("bit06").addEventListener("keydown", arrowWork);
document.getElementById("bit07").addEventListener("keydown", arrowWork);
document.getElementById("bit08").addEventListener("keydown", arrowWork);
document.getElementById("bit09").addEventListener("keydown", arrowWork);
document.getElementById("bit10").addEventListener("keydown", arrowWork);
document.getElementById("bit11").addEventListener("keydown", arrowWork);
document.getElementById("bit12").addEventListener("keydown", arrowWork);
document.getElementById("bit13").addEventListener("keydown", arrowWork);
document.getElementById("bit14").addEventListener("keydown", arrowWork);
document.getElementById("bit15").addEventListener("keydown", arrowWork);
document.getElementById("bit16").addEventListener("keydown", arrowWork);
document.getElementById("bit17").addEventListener("keydown", arrowWork);



function arrowWork(event)
{
    //alert(2);
        var str = "bit";
    if(event.keyCode == 40)//DOWN
        {
            this.checked = false;
            document.getElementById(getRelevantBox(this)).value = '0';
        }
        else if(event.keyCode == 38)//UP
        {
            this.checked = true;
            document.getElementById(getRelevantBox(this)).value = '1';
        }
        else if(event.keyCode == 37)//LEFT
        {
            switch (this) {
                case bit00:
                    document.getElementById("bit17").focus(); 
                    break;
                case bit01:
                    document.getElementById("bit00").focus();
                    break;
                case bit02:
                    document.getElementById("bit01").focus();
                    break;
                case bit03:
                    document.getElementById("bit02").focus();
                    break;
                case bit04:
                    document.getElementById("bit03").focus();
                    break;
                case bit05:
                    document.getElementById("bit04").focus();
                    break;
                case bit06:
                    document.getElementById("bit05").focus();    
                    break;
                case bit07:
                    document.getElementById("bit06").focus(); 
                    break;
                case bit08:
                    document.getElementById("bit07").focus();
                    break;
                case bit09:
                    document.getElementById("bit08").focus();
                    break;
                case bit10:
                    document.getElementById("bit09").focus();
                    break;
                case bit11:
                    document.getElementById("bit10").focus();
                    break;
                case bit12:
                    document.getElementById("bit11").focus();
                    break;
                case bit13:
                    document.getElementById("bit12").focus();
                    break;
                case bit14:
                    document.getElementById("bit13").focus();
                    break;
                case bit15:
                    document.getElementById("bit14").focus();
                    break;
                case bit16:
                    document.getElementById("bit15").focus();
                    break;
                case bit17:
                    document.getElementById("bit16").focus();
                    break;                                                
                default:
                    break;
            }
        }
        else if(event.keyCode == 39)//RIGHT
        {
            switch (this) {
                case bit00:
                    document.getElementById("bit01").focus(); 
                    break;
                case bit01:
                    document.getElementById("bit02").focus();
                    break;
                case bit02:
                    document.getElementById("bit03").focus();
                    break;
                case bit03:
                    document.getElementById("bit04").focus();
                    break;
                case bit04:
                    document.getElementById("bit05").focus();
                    break;
                case bit05:
                    document.getElementById("bit06").focus();
                    break;
                case bit06:
                    document.getElementById("bit07").focus();    
                    break;
                case bit07:
                    document.getElementById("bit08").focus(); 
                    break;
                case bit08:
                    document.getElementById("bit09").focus();
                    break;
                case bit09:
                    document.getElementById("bit10").focus();
                    break;
                case bit10:
                    document.getElementById("bit11").focus();
                    break;
                case bit11:
                    document.getElementById("bit12").focus();
                    break;
                case bit12:
                    document.getElementById("bit13").focus();
                    break;
                case bit13:
                    document.getElementById("bit14").focus();
                    break;
                case bit14:
                    document.getElementById("bit15").focus();
                    break;
                case bit15:
                    document.getElementById("bit16").focus();
                    break;
                case bit16:
                    document.getElementById("bit17").focus();
                    break;
                case bit17:
                    document.getElementById("bit00").focus();
                    break;                                                
                default:
                    break;
            }
        }
        sevenSegUpdate(this);
}

function getRelevantBox(swNum)
{
    switch(swNum)
    {
        case bit00:
            return "bit0In";
            break;
        case bit01:
            return "bit1In";
            break;
        case bit02:
            return "bit2In";
            break;
        case bit03:
            return "bit3In";
            break; 
        case bit04:
            return "bit4In";
            break;
        case bit05:
            return "bit5In";
            break;
        case bit06:
            return "bit6In";
            break;
        case bit07:
            return "bit7In";
            break;
        case bit08:
            return "bit8In";
            break; 
        case bit09:
            return "bit9In";
            break;    
        case bit10:
            return "bit10In";
            break;
        case bit11:
            return "bit11In";
            break;
        case bit12:
            return "bit12In";
            break;
        case bit13:
            return "bit13In";
            break; 
        case bit14:
            return "bit14In";
            break;        
        case bit15:
            return "bit15In";
            break;
        case bit16:
            return "bit16In";
            break; 
        case bit17:
            return "bit17In";
            break;     
        default:
            break;          
    }    
}    

document.getElementById("bit00").onclick = uiMode();
document.getElementById("bit01").onclick = uiMode();

function uiMode(){
    var viewSw = document.getElementById("bit00");
    var gameSw = document.getElementById("bit01");

    // if(gameSw.checked)//Game Mode
    // {
    //     Pong(); //Need
    // }
    // else{//View Mode, ignored if we are in game mode

    // }
    if(viewSw.checked)//RegView
    {
        regView();
    }
    else
    {
        memView();
    }
}

function gameSevenSeg(){

            var topLine = document.getElementById("topT8");
            var topL = document.getElementById("topL8");
            var topR = document.getElementById("topR8");
            var midLine = document.getElementById("midM8");
            var botLine = document.getElementById("botB8");
            var botL = document.getElementById("botL8");
            var botR = document.getElementById("botR8");

            var topLineTriL = document.getElementById("topT8L");
            var topLineTriR = document.getElementById("topT8R");
            var topLTriT = document.getElementById("topL8T");
            var topLTriB = document.getElementById("topL8B");
            var topRTriT = document.getElementById("topR8T");
            var topRTriB = document.getElementById("topR8B");
            var midLineTriL = document.getElementById("midM8L");
            var midLineTriR = document.getElementById("midM8R");
            var botLineTriL = document.getElementById("botB8L");
            var botLineTriR = document.getElementById("botB8R");
            var botLTriT = document.getElementById("botL8T");
            var botLTriB = document.getElementById("botL8B");
            var botRTriT = document.getElementById("botR8T");
            var botRTriB = document.getElementById("botR8B");

}

function sevenSegUpdate(bit)
{
    var b3 = '0';
    var b2 = '0';
    var b1 = '0';
    var b0 = '0';

    switch(bit)
    {
        case bit17:
        case bit16:
        case bit15:
        case bit14:
            var topLine = document.getElementById("topT8");
            var topL = document.getElementById("topL8");
            var topR = document.getElementById("topR8");
            var midLine = document.getElementById("midM8");
            var botLine = document.getElementById("botB8");
            var botL = document.getElementById("botL8");
            var botR = document.getElementById("botR8");

            var topLineTriL = document.getElementById("topT8L");
            var topLineTriR = document.getElementById("topT8R");
            var topLTriT = document.getElementById("topL8T");
            var topLTriB = document.getElementById("topL8B");
            var topRTriT = document.getElementById("topR8T");
            var topRTriB = document.getElementById("topR8B");
            var midLineTriL = document.getElementById("midM8L");
            var midLineTriR = document.getElementById("midM8R");
            var botLineTriL = document.getElementById("botB8L");
            var botLineTriR = document.getElementById("botB8R");
            var botLTriT = document.getElementById("botL8T");
            var botLTriB = document.getElementById("botL8B");
            var botRTriT = document.getElementById("botR8T");
            var botRTriB = document.getElementById("botR8B");
        

            if(document.getElementById("bit14").checked)
            {
                b3 = '1';
            }
            if(document.getElementById("bit15").checked)
            {
                b2 = '1';
            }
            if(document.getElementById("bit16").checked)
            {
                b1 = '1';
            }
            if(document.getElementById("bit17").checked)
            {
                b0 = '1';
            }
            break;
        case bit13:
        case bit12:
        case bit11:
        case bit10:
            var topLine = document.getElementById("topT7");
            var topL = document.getElementById("topL7");
            var topR = document.getElementById("topR7");
            var midLine = document.getElementById("midM7");
            var botLine = document.getElementById("botB7");
            var botL = document.getElementById("botL7");
            var botR = document.getElementById("botR7");

            var topLineTriL = document.getElementById("topT7L");
            var topLineTriR = document.getElementById("topT7R");
            var topLTriT = document.getElementById("topL7T");
            var topLTriB = document.getElementById("topL7B");
            var topRTriT = document.getElementById("topR7T");
            var topRTriB = document.getElementById("topR7B");
            var midLineTriL = document.getElementById("midM7L");
            var midLineTriR = document.getElementById("midM7R");
            var botLineTriL = document.getElementById("botB7L");
            var botLineTriR = document.getElementById("botB7R");
            var botLTriT = document.getElementById("botL7T");
            var botLTriB = document.getElementById("botL7B");
            var botRTriT = document.getElementById("botR7T");
            var botRTriB = document.getElementById("botR7B");

            if(document.getElementById("bit10").checked)
            {
                b3 = '1';
            }
            if(document.getElementById("bit11").checked)
            {
                b2 = '1';
            }
            if(document.getElementById("bit12").checked)
            {
                b1 = '1';
            }
            if(document.getElementById("bit13").checked)
            {
                b0 = '1';
            }
            break;  
        case bit09:
        case bit08:
        case bit07:
        case bit06:
            var topLine = document.getElementById("topT6");
            var topL = document.getElementById("topL6");
            var topR = document.getElementById("topR6");
            var midLine = document.getElementById("midM6");
            var botLine = document.getElementById("botB6");
            var botL = document.getElementById("botL6");
            var botR = document.getElementById("botR6");

            var topLineTriL = document.getElementById("topT6L");
            var topLineTriR = document.getElementById("topT6R");
            var topLTriT = document.getElementById("topL6T");
            var topLTriB = document.getElementById("topL6B");
            var topRTriT = document.getElementById("topR6T");
            var topRTriB = document.getElementById("topR6B");
            var midLineTriL = document.getElementById("midM6L");
            var midLineTriR = document.getElementById("midM6R");
            var botLineTriL = document.getElementById("botB6L");
            var botLineTriR = document.getElementById("botB6R");
            var botLTriT = document.getElementById("botL6T");
            var botLTriB = document.getElementById("botL6B");
            var botRTriT = document.getElementById("botR6T");
            var botRTriB = document.getElementById("botR6B");

            if(document.getElementById("bit06").checked)
            {
                b3 = '1';
            }
            if(document.getElementById("bit07").checked)
            {
                b2 = '1';
            }
            if(document.getElementById("bit08").checked)
            {
                b1 = '1';
            }
            if(document.getElementById("bit09").checked)
            {
                b0 = '1';
            }
            break;  
        case bit05:
        case bit04:
        case bit03:
        case bit02:
            var topLine = document.getElementById("topT5");
            var topL = document.getElementById("topL5");
            var topR = document.getElementById("topR5");
            var midLine = document.getElementById("midM5");
            var botLine = document.getElementById("botB5");
            var botL = document.getElementById("botL5");
            var botR = document.getElementById("botR5");

            var topLineTriL = document.getElementById("topT5L");
            var topLineTriR = document.getElementById("topT5R");
            var topLTriT = document.getElementById("topL5T");
            var topLTriB = document.getElementById("topL5B");
            var topRTriT = document.getElementById("topR5T");
            var topRTriB = document.getElementById("topR5B");
            var midLineTriL = document.getElementById("midM5L");
            var midLineTriR = document.getElementById("midM5R");
            var botLineTriL = document.getElementById("botB5L");
            var botLineTriR = document.getElementById("botB5R");
            var botLTriT = document.getElementById("botL5T");
            var botLTriB = document.getElementById("botL5B");
            var botRTriT = document.getElementById("botR5T");
            var botRTriB = document.getElementById("botR5B");

            if(document.getElementById("bit02").checked)
            {
                b3 = '1';
            }
            if(document.getElementById("bit03").checked)
            {
                b2 = '1';
            }
            if(document.getElementById("bit04").checked)
            {
                b1 = '1';
            }
            if(document.getElementById("bit05").checked)
            {
                b0 = '1';
            }
            break;
    }

    if(getRelevantBox(bit) == 'bit17in' || getRelevantBox(bit) == 'bit16in' || getRelevantBox(bit) == 'bit15in' || getRelevantBox(bit) == 'bit14in')
    {
        var topLine = document.getElementById("topT8");
        var topL = document.getElementById("topL8");
        var topR = document.getElementById("topR8");
        var midLine = document.getElementById("midM8");
        var botLine = document.getElementById("botB8");
        var botL = document.getElementById("botL8");
        var botR = document.getElementById("botR8");
        

        if(document.getElementById("bit14").checked)
        {
            b3 = '1';
        }
        if(document.getElementById("bit15").checked)
        {
            b2 = '1';
        }
        if(document.getElementById("bit16").checked)
        {
            b1 = '1';
        }
        if(document.getElementById("bit17").checked)
        {
            b0 = '1';
        }
    }
    
    if(b3 == '1')//8 case in here (8,9,A,B,C,D,E,F)
    {
        if(b2 == '1')
        {
            if(b1 == '1')
            {

                if(b0 == '1')//F
                {
                    topLine.style.stroke = 'red';
                    topL.style.stroke = 'red';
                    topR.style.stroke = 'lightgrey';
                    midLine.style.stroke = 'red';
                    botL.style.stroke = 'red';
                    botR.style.stroke = 'lightgrey';
                    botLine.style.stroke = 'lightgrey';

                    topLineTriL.style.fill = 'red';
                    topLineTriR.style.fill = 'red';
                    topLTriB.style.fill = 'red';
                    topLTriT.style.fill = 'red';
                    topRTriB.style.fill = 'lightgrey';
                    topRTriT.style.fill = 'lightgrey';
                    midLineTriL.style.fill = 'red';
                    midLineTriR.style.fill = 'red';
                    botLTriB.style.fill = 'red';
                    botLTriT.style.fill = 'red';
                    botRTriB.style.fill = 'lightgrey';
                    botRTriT.style.fill = 'lightgrey';
                    botLineTriL.style.fill = 'lightgrey';
                    botLineTriR.style.fill = 'lightgrey';
                }
                else//E
                {
                    topLine.style.stroke = 'red';
                    topL.style.stroke = 'red';
                    topR.style.stroke = 'lightgrey';
                    midLine.style.stroke = 'red';
                    botL.style.stroke = 'red';
                    botR.style.stroke = 'lightgrey';
                    botLine.style.stroke = 'red';

                    topLineTriL.style.fill = 'red';
                    topLineTriR.style.fill = 'red';
                    topLTriB.style.fill = 'red';
                    topLTriT.style.fill = 'red';
                    topRTriB.style.fill = 'lightgrey';
                    topRTriT.style.fill = 'lightgrey';
                    midLineTriL.style.fill = 'red';
                    midLineTriR.style.fill = 'red';
                    botLTriB.style.fill = 'red';
                    botLTriT.style.fill = 'red';
                    botRTriB.style.fill = 'lightgrey';
                    botRTriT.style.fill = 'lightgrey';
                    botLineTriL.style.fill = 'red';
                    botLineTriR.style.fill = 'red';
                }
            }
            else
            {
                if(b0 == '1')//D
                {
                    topLine.style.stroke = 'lightgrey';
                    topL.style.stroke = 'lightgrey';
                    topR.style.stroke = 'red';
                    midLine.style.stroke = 'red';
                    botL.style.stroke = 'red';
                    botR.style.stroke = 'red';
                    botLine.style.stroke = 'red';

                    topLineTriL.style.fill = 'lightgrey';
                    topLineTriR.style.fill = 'lightgrey';
                    topLTriB.style.fill = 'lightgrey';
                    topLTriT.style.fill = 'lightgrey';
                    topRTriB.style.fill = 'red';
                    topRTriT.style.fill = 'red';
                    midLineTriL.style.fill = 'red';
                    midLineTriR.style.fill = 'red';
                    botLTriB.style.fill = 'red';
                    botLTriT.style.fill = 'red';
                    botRTriB.style.fill = 'red';
                    botRTriT.style.fill = 'red';
                    botLineTriL.style.fill = 'red';
                    botLineTriR.style.fill = 'red';
                }
                else//C
                {
                    topLine.style.stroke = 'red';
                    topL.style.stroke = 'red';
                    topR.style.stroke = 'lightgrey';
                    midLine.style.stroke = 'lightgrey';
                    botL.style.stroke = 'red';
                    botR.style.stroke = 'lightgrey';
                    botLine.style.stroke = 'red';

                    topLineTriL.style.fill = 'red';
                    topLineTriR.style.fill = 'red';
                    topLTriB.style.fill = 'red';
                    topLTriT.style.fill = 'red';
                    topRTriB.style.fill = 'lightgrey';
                    topRTriT.style.fill = 'lightgrey';
                    midLineTriL.style.fill = 'lightgrey';
                    midLineTriR.style.fill = 'lightgrey';
                    botLTriB.style.fill = 'red';
                    botLTriT.style.fill = 'red';
                    botRTriB.style.fill = 'lightgrey';
                    botRTriT.style.fill = 'lightgrey';
                    botLineTriL.style.fill = 'red';
                    botLineTriR.style.fill = 'red';
                }
            }
        }
        else
        {
            if(b1 == '1')
            {
                if(b0 == '1')//B
                {
                    topLine.style.stroke = 'lightgrey';
                    topL.style.stroke = 'red';
                    topR.style.stroke = 'lightgrey';
                    midLine.style.stroke = 'red';
                    botL.style.stroke = 'red';
                    botR.style.stroke = 'red';
                    botLine.style.stroke = 'red';

                    topLineTriL.style.fill = 'lightgrey';
                    topLineTriR.style.fill = 'lightgrey';
                    topLTriB.style.fill = 'red';
                    topLTriT.style.fill = 'red';
                    topRTriB.style.fill = 'lightgrey';
                    topRTriT.style.fill = 'lightgrey';
                    midLineTriL.style.fill = 'red';
                    midLineTriR.style.fill = 'red';
                    botLTriB.style.fill = 'red';
                    botLTriT.style.fill = 'red';
                    botRTriB.style.fill = 'red';
                    botRTriT.style.fill = 'red';
                    botLineTriL.style.fill = 'red';
                    botLineTriR.style.fill = 'red';
                }
                else//A
                {
                    topLine.style.stroke = 'red';
                    topL.style.stroke = 'red';
                    topR.style.stroke = 'red';
                    midLine.style.stroke = 'red';
                    botL.style.stroke = 'red';
                    botR.style.stroke = 'red';
                    botLine.style.stroke = 'lightgrey';

                    topLineTriL.style.fill = 'red';
                    topLineTriR.style.fill = 'red';
                    topLTriB.style.fill = 'red';
                    topLTriT.style.fill = 'red';
                    topRTriB.style.fill = 'red';
                    topRTriT.style.fill = 'red';
                    midLineTriL.style.fill = 'red';
                    midLineTriR.style.fill = 'red';
                    botLTriB.style.fill = 'red';
                    botLTriT.style.fill = 'red';
                    botRTriB.style.fill = 'red';
                    botRTriT.style.fill = 'red';
                    botLineTriL.style.fill = 'lightgrey';
                    botLineTriR.style.fill = 'lightgrey';
                }
            }
            else
            {
                if(b0 == '1')//9
                {
                    topLine.style.stroke = 'red';
                    topL.style.stroke = 'red';
                    topR.style.stroke = 'red';
                    midLine.style.stroke = 'red';
                    botL.style.stroke = 'lightgrey';
                    botR.style.stroke = 'red';
                    botLine.style.stroke = 'lightgrey';

                    topLineTriL.style.fill = 'red';
                    topLineTriR.style.fill = 'red';
                    topLTriB.style.fill = 'red';
                    topLTriT.style.fill = 'red';
                    topRTriB.style.fill = 'red';
                    topRTriT.style.fill = 'red';
                    midLineTriL.style.fill = 'red';
                    midLineTriR.style.fill = 'red';
                    botLTriB.style.fill = 'lightgrey';
                    botLTriT.style.fill = 'lightgrey';
                    botRTriB.style.fill = 'red';
                    botRTriT.style.fill = 'red';
                    botLineTriL.style.fill = 'lightgrey';
                    botLineTriR.style.fill = 'lightgrey';
                }
                else//8
                {
                    topLine.style.stroke = 'red';
                    topL.style.stroke = 'red';
                    topR.style.stroke = 'red';
                    midLine.style.stroke = 'red';
                    botL.style.stroke = 'red';
                    botR.style.stroke = 'red';
                    botLine.style.stroke = 'red';

                    topLineTriL.style.fill = 'red';
                    topLineTriR.style.fill = 'red';
                    topLTriB.style.fill = 'red';
                    topLTriT.style.fill = 'red';
                    topRTriB.style.fill = 'red';
                    topRTriT.style.fill = 'red';
                    midLineTriL.style.fill = 'red';
                    midLineTriR.style.fill = 'red';
                    botLTriB.style.fill = 'red';
                    botLTriT.style.fill = 'red';
                    botRTriB.style.fill = 'red';
                    botRTriT.style.fill = 'red';
                    botLineTriL.style.fill = 'red';
                    botLineTriR.style.fill = 'red';
                }
            }
        }
    }
    else//8 Case in here, (0,1,2,3,4,5,6,7)
    {
        if(b2 == '1')
        {
            if(b1 == '1')
            {
                if(b0 == '1')//7
                {
                    topLine.style.stroke = 'red';
                    topL.style.stroke = 'lightgrey';
                    topR.style.stroke = 'red';
                    midLine.style.stroke = 'lightgrey';
                    botL.style.stroke = 'lightgrey';
                    botR.style.stroke = 'red';
                    botLine.style.stroke = 'lightgrey';

                    topLineTriL.style.fill = 'red';
                    topLineTriR.style.fill = 'red';
                    topLTriB.style.fill = 'lightgrey';
                    topLTriT.style.fill = 'lightgrey';
                    topRTriB.style.fill = 'red';
                    topRTriT.style.fill = 'red';
                    midLineTriL.style.fill = 'lightgrey';
                    midLineTriR.style.fill = 'lightgrey';
                    botLTriB.style.fill = 'lightgrey';
                    botLTriT.style.fill = 'lightgrey';
                    botRTriB.style.fill = 'red';
                    botRTriT.style.fill = 'red';
                    botLineTriL.style.fill = 'lightgrey';
                    botLineTriR.style.fill = 'lightgrey';
                }
                else//6
                {
                    topLine.style.stroke = 'red';
                    topL.style.stroke = 'red';
                    topR.style.stroke = 'lightgrey';
                    midLine.style.stroke = 'red';
                    botL.style.stroke = 'red';
                    botR.style.stroke = 'red';
                    botLine.style.stroke = 'red';

                    topLineTriL.style.fill = 'red';
                    topLineTriR.style.fill = 'red';
                    topLTriB.style.fill = 'red';
                    topLTriT.style.fill = 'red';
                    topRTriB.style.fill = 'lightgrey';
                    topRTriT.style.fill = 'lightgrey';
                    midLineTriL.style.fill = 'red';
                    midLineTriR.style.fill = 'red';
                    botLTriB.style.fill = 'red';
                    botLTriT.style.fill = 'red';
                    botRTriB.style.fill = 'red';
                    botRTriT.style.fill = 'red';
                    botLineTriL.style.fill = 'red';
                    botLineTriR.style.fill = 'red';
                }
            }
            else
            {
                if(b0 == '1')//5
                {
                    topLine.style.stroke = 'red';
                    topL.style.stroke = 'red';
                    topR.style.stroke = 'lightgrey';
                    midLine.style.stroke = 'red';
                    botL.style.stroke = 'lightgrey';
                    botR.style.stroke = 'red';
                    botLine.style.stroke = 'red';

                    topLineTriL.style.fill = 'red';
                    topLineTriR.style.fill = 'red';
                    topLTriB.style.fill = 'red';
                    topLTriT.style.fill = 'red';
                    topRTriB.style.fill = 'lightgrey';
                    topRTriT.style.fill = 'lightgrey';
                    midLineTriL.style.fill = 'red';
                    midLineTriR.style.fill = 'red';
                    botLTriB.style.fill = 'lightgrey';
                    botLTriT.style.fill = 'lightgrey';
                    botRTriB.style.fill = 'red';
                    botRTriT.style.fill = 'red';
                    botLineTriL.style.fill = 'red';
                    botLineTriR.style.fill = 'red';
                }
                else//4
                {
                    topLine.style.stroke = 'lightgrey';
                    topL.style.stroke = 'red';
                    topR.style.stroke = 'red';
                    midLine.style.stroke = 'red';
                    botL.style.stroke = 'lightgrey';
                    botR.style.stroke = 'red';
                    botLine.style.stroke = 'lightgrey';

                    topLineTriL.style.fill = 'lightgrey';
                    topLineTriR.style.fill = 'lightgrey';
                    topLTriB.style.fill = 'red';
                    topLTriT.style.fill = 'red';
                    topRTriB.style.fill = 'red';
                    topRTriT.style.fill = 'red';
                    midLineTriL.style.fill = 'red';
                    midLineTriR.style.fill = 'red';
                    botLTriB.style.fill = 'lightgrey';
                    botLTriT.style.fill = 'lightgrey';
                    botRTriB.style.fill = 'red';
                    botRTriT.style.fill = 'red';
                    botLineTriL.style.fill = 'lightgrey';
                    botLineTriR.style.fill = 'lightgrey';
                }
            }
        }
        else
        {
            if(b1 == '1')
            {
                if(b0 == '1')//3
                {
                    topLine.style.stroke = 'red';
                    topL.style.stroke = 'lightgrey';
                    topR.style.stroke = 'red';
                    midLine.style.stroke = 'red';
                    botL.style.stroke = 'lightgrey';
                    botR.style.stroke = 'red';
                    botLine.style.stroke = 'red';

                    topLineTriL.style.fill = 'red';
                    topLineTriR.style.fill = 'red';
                    topLTriB.style.fill = 'lightgrey';
                    topLTriT.style.fill = 'lightgrey';
                    topRTriB.style.fill = 'red';
                    topRTriT.style.fill = 'red';
                    midLineTriL.style.fill = 'red';
                    midLineTriR.style.fill = 'red';
                    botLTriB.style.fill = 'lightgrey';
                    botLTriT.style.fill = 'lightgrey';
                    botRTriB.style.fill = 'red';
                    botRTriT.style.fill = 'red';
                    botLineTriL.style.fill = 'red';
                    botLineTriR.style.fill = 'red';
                }
                else//2
                {
                    topLine.style.stroke = 'red';
                    topL.style.stroke = 'lightgrey';
                    topR.style.stroke = 'red';
                    midLine.style.stroke = 'red';
                    botL.style.stroke = 'red';
                    botR.style.stroke = 'lightgrey';
                    botLine.style.stroke = 'red';

                    topLineTriL.style.fill = 'red';
                    topLineTriR.style.fill = 'red';
                    topLTriB.style.fill = 'lightgrey';
                    topLTriT.style.fill = 'lightgrey';
                    topRTriB.style.fill = 'red';
                    topRTriT.style.fill = 'red';
                    midLineTriL.style.fill = 'red';
                    midLineTriR.style.fill = 'red';
                    botLTriB.style.fill = 'red';
                    botLTriT.style.fill = 'red';
                    botRTriB.style.fill = 'lightgrey';
                    botRTriT.style.fill = 'lightgrey';
                    botLineTriL.style.fill = 'red';
                    botLineTriR.style.fill = 'red';
                }
            }
            else
            {
                if(b0 == '1')//1
                {
                    topLine.style.stroke = 'lightgrey';
                    topL.style.stroke = 'lightgrey';
                    topR.style.stroke = 'red';
                    midLine.style.stroke = 'lightgrey';
                    botL.style.stroke = 'lightgrey';
                    botR.style.stroke = 'red';
                    botLine.style.stroke = 'lightgrey';

                    topLineTriL.style.fill = 'lightgrey';
                    topLineTriR.style.fill = 'lightgrey';
                    topLTriB.style.fill = 'lightgrey';
                    topLTriT.style.fill = 'lightgrey';
                    topRTriB.style.fill = 'red';
                    topRTriT.style.fill = 'red';
                    midLineTriL.style.fill = 'lightgrey';
                    midLineTriR.style.fill = 'lightgrey';
                    botLTriB.style.fill = 'lightgrey';
                    botLTriT.style.fill = 'lightgrey';
                    botRTriB.style.fill = 'red';
                    botRTriT.style.fill = 'red';
                    botLineTriL.style.fill = 'lightgrey';
                    botLineTriR.style.fill = 'lightgrey';
                }
                else//0
                {
                    topLine.style.stroke = 'red';
                    topL.style.stroke = 'red';
                    topR.style.stroke = 'red';
                    midLine.style.stroke = 'lightgrey';
                    botL.style.stroke = 'red';
                    botR.style.stroke = 'red';
                    botLine.style.stroke = 'red';
                    
                    topLineTriL.style.fill = 'red';
                    topLineTriR.style.fill = 'red';
                    topLTriB.style.fill = 'red';
                    topLTriT.style.fill = 'red';
                    topRTriB.style.fill = 'red';
                    topRTriT.style.fill = 'red';
                    midLineTriL.style.fill = 'lightgrey';
                    midLineTriR.style.fill = 'lightgrey';
                    botLTriB.style.fill = 'red';
                    botLTriT.style.fill = 'red';
                    botRTriB.style.fill = 'red';
                    botRTriT.style.fill = 'red';
                    botLineTriL.style.fill = 'red';
                    botLineTriR.style.fill = 'red';
                }
            }
        }
    }
}

document.addEventListener("keydown", pushButtonKey)

function pushButtonKey(event){
    //alert(event.keyCode);
    if(event.keyCode == 75)
    {
        //document.getElementById("push1").focus();
        document.getElementById("push1").click();
        document.getElementById("push2").click();
        document.getElementById("pushin1").style.backgroundColor = "green";
        document.getElementById("pushin2").style.backgroundColor = "green";
        setTimeout(goBack, 100, "pushin1");
        setTimeout(goBack, 100, "pushin2");
    }
    if(event.keyCode == 85)
    {
        document.getElementById("push1").click();
        document.getElementById("pushin1").style.backgroundColor = "green";
        setTimeout(goBack, 100, "pushin1");
    }
    else if(event.keyCode == 73)
    {
        document.getElementById("push2").click();
        document.getElementById("pushin2").style.backgroundColor = "green";
        setTimeout(goBack, 100, "pushin2");
    }
    else if(event.keyCode == 79)
    {
        document.getElementById("push3").click();
        document.getElementById("pushin3").style.backgroundColor = "green";
        setTimeout(goBack, 100, "pushin3");
    }
    else if(event.keyCode == 80)
    {
        document.getElementById("push4").click();
        document.getElementById("pushin4").style.backgroundColor = "green";
        setTimeout(goBack, 100, "pushin4");
    }
}

function goBack(id){
    document.getElementById(id).style.backgroundColor = "";
}

function msgChk(id){
    alert(id)
}

function Pong(){

}

function memView(){
    var dmemdata = cpu.dMem.registers;

    var currentRegVal;

    var topLine;
    var topL;
    var topR;
    var midLine;
    var botLine;
    var botL;
    var botR;

    var topLineTriL;
    var topLineTriR;
    var topLTriT;
    var topLTriB;
    var topRTriT;
    var topRTriB;
    var midLineTriL;
    var midLineTriR;
    var botLineTriL;
    var botLineTriR;
    var botLTriT;
    var botLTriB;
    var botRTriT;
    var botRTriB;
    
    for(var i = 0; i < 8; i++)
    {
        switch(i)
        {
            case(0):
            {
                topLine = document.getElementById("topT1");
                topL = document.getElementById("topL1");
                topR = document.getElementById("topR1");
                midLine = document.getElementById("midM1");
                botLine = document.getElementById("botB1");
                botL = document.getElementById("botL1");
                botR = document.getElementById("botR1");
    
                topLineTriL = document.getElementById("topT1L");
                topLineTriR = document.getElementById("topT1R");
                topLTriT = document.getElementById("topL1T");
                topLTriB = document.getElementById("topL1B");
                topRTriT = document.getElementById("topR1T");
                topRTriB = document.getElementById("topR1B");
                midLineTriL = document.getElementById("midM1L");
                midLineTriR = document.getElementById("midM1R");
                botLineTriL = document.getElementById("botB1L");
                botLineTriR = document.getElementById("botB1R");
                botLTriT = document.getElementById("botL1T");
                botLTriB = document.getElementById("botL1B");
                botRTriT = document.getElementById("botR1T");
                botRTriB = document.getElementById("botR1B");
            }
            case(1):
            {
                topLine = document.getElementById("topT2");
                topL = document.getElementById("topL2");
                topR = document.getElementById("topR2");
                midLine = document.getElementById("midM2");
                botLine = document.getElementById("botB2");
                botL = document.getElementById("botL2");
                botR = document.getElementById("botR2");
    
                topLineTriL = document.getElementById("topT2L");
                topLineTriR = document.getElementById("topT2R");
                topLTriT = document.getElementById("topL2T");
                topLTriB = document.getElementById("topL2B");
                topRTriT = document.getElementById("topR2T");
                topRTriB = document.getElementById("topR2B");
                midLineTriL = document.getElementById("midM2L");
                midLineTriR = document.getElementById("midM2R");
                botLineTriL = document.getElementById("botB2L");
                botLineTriR = document.getElementById("botB2R");
                botLTriT = document.getElementById("botL2T");
                botLTriB = document.getElementById("botL2B");
                botRTriT = document.getElementById("botR2T");
                botRTriB = document.getElementById("botR2B");
            }
            case(2):
            {
                topLine = document.getElementById("topT3");
                topL = document.getElementById("topL3");
                topR = document.getElementById("topR3");
                midLine = document.getElementById("midM3");
                botLine = document.getElementById("botB3");
                botL = document.getElementById("botL3");
                botR = document.getElementById("botR3");
    
                topLineTriL = document.getElementById("topT3L");
                topLineTriR = document.getElementById("topT3R");
                topLTriT = document.getElementById("topL3T");
                topLTriB = document.getElementById("topL3B");
                topRTriT = document.getElementById("topR3T");
                topRTriB = document.getElementById("topR3B");
                midLineTriL = document.getElementById("midM3L");
                midLineTriR = document.getElementById("midM3R");
                botLineTriL = document.getElementById("botB3L");
                botLineTriR = document.getElementById("botB3R");
                botLTriT = document.getElementById("botL3T");
                botLTriB = document.getElementById("botL3B");
                botRTriT = document.getElementById("botR3T");
                botRTriB = document.getElementById("botR3B");
            }
            case(3):
            {
                topLine = document.getElementById("topT4");
                topL = document.getElementById("topL4");
                topR = document.getElementById("topR4");
                midLine = document.getElementById("midM4");
                botLine = document.getElementById("botB4");
                botL = document.getElementById("botL4");
                botR = document.getElementById("botR4");
    
                topLineTriL = document.getElementById("topT4L");
                topLineTriR = document.getElementById("topT4R");
                topLTriT = document.getElementById("topL4T");
                topLTriB = document.getElementById("topL4B");
                topRTriT = document.getElementById("topR4T");
                topRTriB = document.getElementById("topR4B");
                midLineTriL = document.getElementById("midM4L");
                midLineTriR = document.getElementById("midM4R");
                botLineTriL = document.getElementById("botB4L");
                botLineTriR = document.getElementById("botB4R");
                botLTriT = document.getElementById("botL4T");
                botLTriB = document.getElementById("botL4B");
                botRTriT = document.getElementById("botR4T");
                botRTriB = document.getElementById("botR4B");
            }
            case(4):
            {
                topLine = document.getElementById("topT5");
                topL = document.getElementById("topL5");
                topR = document.getElementById("topR5");
                midLine = document.getElementById("midM5");
                botLine = document.getElementById("botB5");
                botL = document.getElementById("botL5");
                botR = document.getElementById("botR5");
    
                topLineTriL = document.getElementById("topT5L");
                topLineTriR = document.getElementById("topT5R");
                topLTriT = document.getElementById("topL5T");
                topLTriB = document.getElementById("topL5B");
                topRTriT = document.getElementById("topR5T");
                topRTriB = document.getElementById("topR5B");
                midLineTriL = document.getElementById("midM5L");
                midLineTriR = document.getElementById("midM5R");
                botLineTriL = document.getElementById("botB5L");
                botLineTriR = document.getElementById("botB5R");
                botLTriT = document.getElementById("botL5T");
                botLTriB = document.getElementById("botL5B");
                botRTriT = document.getElementById("botR5T");
                botRTriB = document.getElementById("botR5B");
            }
            case(5):
            {
                topLine = document.getElementById("topT6");
                topL = document.getElementById("topL6");
                topR = document.getElementById("topR6");
                midLine = document.getElementById("midM6");
                botLine = document.getElementById("botB6");
                botL = document.getElementById("botL6");
                botR = document.getElementById("botR6");
    
                topLineTriL = document.getElementById("topT6L");
                topLineTriR = document.getElementById("topT6R");
                topLTriT = document.getElementById("topL6T");
                topLTriB = document.getElementById("topL6B");
                topRTriT = document.getElementById("topR6T");
                topRTriB = document.getElementById("topR6B");
                midLineTriL = document.getElementById("midM6L");
                midLineTriR = document.getElementById("midM6R");
                botLineTriL = document.getElementById("botB6L");
                botLineTriR = document.getElementById("botB6R");
                botLTriT = document.getElementById("botL6T");
                botLTriB = document.getElementById("botL6B");
                botRTriT = document.getElementById("botR6T");
                botRTriB = document.getElementById("botR6B");
            }
            case(6):
            {
                topLine = document.getElementById("topT7");
                topL = document.getElementById("topL7");
                topR = document.getElementById("topR7");
                midLine = document.getElementById("midM7");
                botLine = document.getElementById("botB7");
                botL = document.getElementById("botL7");
                botR = document.getElementById("botR7");
    
                topLineTriL = document.getElementById("topT57");
                topLineTriR = document.getElementById("topT57");
                topLTriT = document.getElementById("topL57");
                topLTriB = document.getElementById("topL57");
                topRTriT = document.getElementById("topR57");
                topRTriB = document.getElementById("topR57");
                midLineTriL = document.getElementById("midM57");
                midLineTriR = document.getElementById("midM57");
                botLineTriL = document.getElementById("botB57");
                botLineTriR = document.getElementById("botB57");
                botLTriT = document.getElementById("botL57");
                botLTriB = document.getElementById("botL57");
                botRTriT = document.getElementById("botR57");
                botRTriB = document.getElementById("botR57");
            }
            case(7):
            {
                topLine = document.getElementById("topT8");
                topL = document.getElementById("topL8");
                topR = document.getElementById("topR8");
                midLine = document.getElementById("midM8");
                botLine = document.getElementById("botB8");
                botL = document.getElementById("botL8");
                botR = document.getElementById("botR8");
    
                topLineTriL = document.getElementById("topT8L");
                topLineTriR = document.getElementById("topT8R");
                topLTriT = document.getElementById("topL8T");
                topLTriB = document.getElementById("topL8B");
                topRTriT = document.getElementById("topR8T");
                topRTriB = document.getElementById("topR8B");
                midLineTriL = document.getElementById("midM8L");
                midLineTriR = document.getElementById("midM8R");
                botLineTriL = document.getElementById("botB8L");
                botLineTriR = document.getElementById("botB8R");
                botLTriT = document.getElementById("botL8T");
                botLTriB = document.getElementById("botL8B");
                botRTriT = document.getElementById("botR8T");
                botRTriB = document.getElementById("botR8B");
            }
            currentRegVal = dmemdata.getRegister(i);

        if(currentRegVal[3] == '1')//8 case in here (8,9,A,B,C,D,E,F)
        {
            if(currentRegVal[2] == '1')
            {
                if(currentRegVal[1] == '1')
                {

                    if(currentRegVal[0] == '1')//F
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'red';
                        topR.style.stroke = 'lightgrey';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'red';
                        botR.style.stroke = 'lightgrey';
                        botLine.style.stroke = 'lightgrey';

                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'red';
                        topLTriT.style.fill = 'red';
                        topRTriB.style.fill = 'lightgrey';
                        topRTriT.style.fill = 'lightgrey';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'red';
                        botLTriT.style.fill = 'red';
                        botRTriB.style.fill = 'lightgrey';
                        botRTriT.style.fill = 'lightgrey';
                        botLineTriL.style.fill = 'lightgrey';
                        botLineTriR.style.fill = 'lightgrey';
                    }
                    else//E
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'red';
                        topR.style.stroke = 'lightgrey';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'red';
                        botR.style.stroke = 'lightgrey';
                        botLine.style.stroke = 'red';

                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'red';
                        topLTriT.style.fill = 'red';
                        topRTriB.style.fill = 'lightgrey';
                        topRTriT.style.fill = 'lightgrey';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'red';
                        botLTriT.style.fill = 'red';
                        botRTriB.style.fill = 'lightgrey';
                        botRTriT.style.fill = 'lightgrey';
                        botLineTriL.style.fill = 'red';
                        botLineTriR.style.fill = 'red';
                    }
                }
                else
                {
                    if(currentRegVal[0] == '1')//D
                    {
                        topLine.style.stroke = 'lightgrey';
                        topL.style.stroke = 'lightgrey';
                        topR.style.stroke = 'red';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'red';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'red';

                        topLineTriL.style.fill = 'lightgrey';
                        topLineTriR.style.fill = 'lightgrey';
                        topLTriB.style.fill = 'lightgrey';
                        topLTriT.style.fill = 'lightgrey';
                        topRTriB.style.fill = 'red';
                        topRTriT.style.fill = 'red';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'red';
                        botLTriT.style.fill = 'red';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'red';
                        botLineTriR.style.fill = 'red';
                    }
                    else//C
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'red';
                        topR.style.stroke = 'lightgrey';
                        midLine.style.stroke = 'lightgrey';
                        botL.style.stroke = 'red';
                        botR.style.stroke = 'lightgrey';
                        botLine.style.stroke = 'red';

                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'red';
                        topLTriT.style.fill = 'red';
                        topRTriB.style.fill = 'lightgrey';
                        topRTriT.style.fill = 'lightgrey';
                        midLineTriL.style.fill = 'lightgrey';
                        midLineTriR.style.fill = 'lightgrey';
                        botLTriB.style.fill = 'red';
                        botLTriT.style.fill = 'red';
                        botRTriB.style.fill = 'lightgrey';
                        botRTriT.style.fill = 'lightgrey';
                        botLineTriL.style.fill = 'red';
                        botLineTriR.style.fill = 'red';
                    }
                }
            }
            else
            {
                if(currentRegVal[1] == '1')
                {
                    if(currentRegVal[0] == '1')//B
                    {
                        topLine.style.stroke = 'lightgrey';
                        topL.style.stroke = 'red';
                        topR.style.stroke = 'lightgrey';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'red';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'red';

                        topLineTriL.style.fill = 'lightgrey';
                        topLineTriR.style.fill = 'lightgrey';
                        topLTriB.style.fill = 'red';
                        topLTriT.style.fill = 'red';
                        topRTriB.style.fill = 'lightgrey';
                        topRTriT.style.fill = 'lightgrey';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'red';
                        botLTriT.style.fill = 'red';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'red';
                        botLineTriR.style.fill = 'red';
                    }
                    else//A
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'red';
                        topR.style.stroke = 'red';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'red';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'lightgrey';

                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'red';
                        topLTriT.style.fill = 'red';
                        topRTriB.style.fill = 'red';
                        topRTriT.style.fill = 'red';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'red';
                        botLTriT.style.fill = 'red';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'lightgrey';
                        botLineTriR.style.fill = 'lightgrey';
                    }
                }
                else
                {
                    if(currentRegVal[0] == '1')//9
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'red';
                        topR.style.stroke = 'red';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'lightgrey';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'lightgrey';

                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'red';
                        topLTriT.style.fill = 'red';
                        topRTriB.style.fill = 'red';
                        topRTriT.style.fill = 'red';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'lightgrey';
                        botLTriT.style.fill = 'lightgrey';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'lightgrey';
                        botLineTriR.style.fill = 'lightgrey';
                    }
                    else//8
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'red';
                        topR.style.stroke = 'red';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'red';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'red';

                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'red';
                        topLTriT.style.fill = 'red';
                        topRTriB.style.fill = 'red';
                        topRTriT.style.fill = 'red';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'red';
                        botLTriT.style.fill = 'red';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'red';
                        botLineTriR.style.fill = 'red';
                    }
                }
            }
        }
        else//8 Case in here, (0,1,2,3,4,5,6,7)
        {
            if(currentRegVal[2] == '1')
            {
                if(currentRegVal[1] == '1')
                {
                    if(currentRegVal[0] == '1')//7
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'lightgrey';
                        topR.style.stroke = 'red';
                        midLine.style.stroke = 'lightgrey';
                        botL.style.stroke = 'lightgrey';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'lightgrey';

                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'lightgrey';
                        topLTriT.style.fill = 'lightgrey';
                        topRTriB.style.fill = 'red';
                        topRTriT.style.fill = 'red';
                        midLineTriL.style.fill = 'lightgrey';
                        midLineTriR.style.fill = 'lightgrey';
                        botLTriB.style.fill = 'lightgrey';
                        botLTriT.style.fill = 'lightgrey';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'lightgrey';
                        botLineTriR.style.fill = 'lightgrey';
                    }
                    else//6
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'red';
                        topR.style.stroke = 'lightgrey';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'red';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'red';

                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'red';
                        topLTriT.style.fill = 'red';
                        topRTriB.style.fill = 'lightgrey';
                        topRTriT.style.fill = 'lightgrey';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'red';
                        botLTriT.style.fill = 'red';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'red';
                        botLineTriR.style.fill = 'red';
                    }
                }
                else
                {
                    if(currentRegVal[0] == '1')//5
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'red';
                        topR.style.stroke = 'lightgrey';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'lightgrey';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'red';

                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'red';
                        topLTriT.style.fill = 'red';
                        topRTriB.style.fill = 'lightgrey';
                        topRTriT.style.fill = 'lightgrey';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'lightgrey';
                        botLTriT.style.fill = 'lightgrey';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'red';
                        botLineTriR.style.fill = 'red';
                    }
                    else//4
                    {
                        topLine.style.stroke = 'lightgrey';
                        topL.style.stroke = 'red';
                        topR.style.stroke = 'red';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'lightgrey';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'lightgrey';

                        topLineTriL.style.fill = 'lightgrey';
                        topLineTriR.style.fill = 'lightgrey';
                        topLTriB.style.fill = 'red';
                        topLTriT.style.fill = 'red';
                        topRTriB.style.fill = 'red';
                        topRTriT.style.fill = 'red';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'lightgrey';
                        botLTriT.style.fill = 'lightgrey';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'lightgrey';
                        botLineTriR.style.fill = 'lightgrey';
                    }
                }
            }
            else
            {
                if(currentRegVal[1] == '1')
                {
                    if(currentRegVal[0] == '1')//3
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'lightgrey';
                        topR.style.stroke = 'red';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'lightgrey';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'red';

                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'lightgrey';
                        topLTriT.style.fill = 'lightgrey';
                        topRTriB.style.fill = 'red';
                        topRTriT.style.fill = 'red';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'lightgrey';
                        botLTriT.style.fill = 'lightgrey';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'red';
                        botLineTriR.style.fill = 'red';
                    }
                    else//2
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'lightgrey';
                        topR.style.stroke = 'red';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'red';
                        botR.style.stroke = 'lightgrey';
                        botLine.style.stroke = 'red';

                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'lightgrey';
                        topLTriT.style.fill = 'lightgrey';
                        topRTriB.style.fill = 'red';
                        topRTriT.style.fill = 'red';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'red';
                        botLTriT.style.fill = 'red';
                        botRTriB.style.fill = 'lightgrey';
                        botRTriT.style.fill = 'lightgrey';
                        botLineTriL.style.fill = 'red';
                        botLineTriR.style.fill = 'red';
                    }
                }
                else
                {
                    if(currentRegVal[0] == '1')//1
                    {
                        topLine.style.stroke = 'lightgrey';
                        topL.style.stroke = 'lightgrey';
                        topR.style.stroke = 'red';
                        midLine.style.stroke = 'lightgrey';
                        botL.style.stroke = 'lightgrey';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'lightgrey';

                        topLineTriL.style.fill = 'lightgrey';
                        topLineTriR.style.fill = 'lightgrey';
                        topLTriB.style.fill = 'lightgrey';
                        topLTriT.style.fill = 'lightgrey';
                        topRTriB.style.fill = 'red';
                        topRTriT.style.fill = 'red';
                        midLineTriL.style.fill = 'lightgrey';
                        midLineTriR.style.fill = 'lightgrey';
                        botLTriB.style.fill = 'lightgrey';
                        botLTriT.style.fill = 'lightgrey';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'lightgrey';
                        botLineTriR.style.fill = 'lightgrey';
                    }
                    else//0
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'red';
                        topR.style.stroke = 'red';
                        midLine.style.stroke = 'lightgrey';
                        botL.style.stroke = 'red';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'red';
                        
                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'red';
                        topLTriT.style.fill = 'red';
                        topRTriB.style.fill = 'red';
                        topRTriT.style.fill = 'red';
                        midLineTriL.style.fill = 'lightgrey';
                        midLineTriR.style.fill = 'lightgrey';
                        botLTriB.style.fill = 'red';
                        botLTriT.style.fill = 'red';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'red';
                        botLineTriR.style.fill = 'red';
                    }
            }
        }
    }
    }
    }
}

function regView(){
    var regHolder = cpu.registers.registers;

    var currentRegVal;

    var topLine;
    var topL;
    var topR;
    var midLine;
    var botLine;
    var botL;
    var botR;

    var topLineTriL;
    var topLineTriR;
    var topLTriT;
    var topLTriB;
    var topRTriT;
    var topRTriB;
    var midLineTriL;
    var midLineTriR;
    var botLineTriL;
    var botLineTriR;
    var botLTriT;
    var botLTriB;
    var botRTriT;
    var botRTriB;
    
    for(var i = 0; i < 4; i++)
    {
        switch(i)
        {
            case(0):
            {
                topLine = document.getElementById("topT1");
                topL = document.getElementById("topL1");
                topR = document.getElementById("topR1");
                midLine = document.getElementById("midM1");
                botLine = document.getElementById("botB1");
                botL = document.getElementById("botL1");
                botR = document.getElementById("botR1");
    
                topLineTriL = document.getElementById("topT1L");
                topLineTriR = document.getElementById("topT1R");
                topLTriT = document.getElementById("topL1T");
                topLTriB = document.getElementById("topL1B");
                topRTriT = document.getElementById("topR1T");
                topRTriB = document.getElementById("topR1B");
                midLineTriL = document.getElementById("midM1L");
                midLineTriR = document.getElementById("midM1R");
                botLineTriL = document.getElementById("botB1L");
                botLineTriR = document.getElementById("botB1R");
                botLTriT = document.getElementById("botL1T");
                botLTriB = document.getElementById("botL1B");
                botRTriT = document.getElementById("botR1T");
                botRTriB = document.getElementById("botR1B");
            }
            case(1):
            {
                topLine = document.getElementById("topT2");
                topL = document.getElementById("topL2");
                topR = document.getElementById("topR2");
                midLine = document.getElementById("midM2");
                botLine = document.getElementById("botB2");
                botL = document.getElementById("botL2");
                botR = document.getElementById("botR2");
    
                topLineTriL = document.getElementById("topT2L");
                topLineTriR = document.getElementById("topT2R");
                topLTriT = document.getElementById("topL2T");
                topLTriB = document.getElementById("topL2B");
                topRTriT = document.getElementById("topR2T");
                topRTriB = document.getElementById("topR2B");
                midLineTriL = document.getElementById("midM2L");
                midLineTriR = document.getElementById("midM2R");
                botLineTriL = document.getElementById("botB2L");
                botLineTriR = document.getElementById("botB2R");
                botLTriT = document.getElementById("botL2T");
                botLTriB = document.getElementById("botL2B");
                botRTriT = document.getElementById("botR2T");
                botRTriB = document.getElementById("botR2B");
            }
            case(2):
            {
                topLine = document.getElementById("topT3");
                topL = document.getElementById("topL3");
                topR = document.getElementById("topR3");
                midLine = document.getElementById("midM3");
                botLine = document.getElementById("botB3");
                botL = document.getElementById("botL3");
                botR = document.getElementById("botR3");
    
                topLineTriL = document.getElementById("topT3L");
                topLineTriR = document.getElementById("topT3R");
                topLTriT = document.getElementById("topL3T");
                topLTriB = document.getElementById("topL3B");
                topRTriT = document.getElementById("topR3T");
                topRTriB = document.getElementById("topR3B");
                midLineTriL = document.getElementById("midM3L");
                midLineTriR = document.getElementById("midM3R");
                botLineTriL = document.getElementById("botB3L");
                botLineTriR = document.getElementById("botB3R");
                botLTriT = document.getElementById("botL3T");
                botLTriB = document.getElementById("botL3B");
                botRTriT = document.getElementById("botR3T");
                botRTriB = document.getElementById("botR3B");
            }
            case(3):
            {
                topLine = document.getElementById("topT4");
                topL = document.getElementById("topL4");
                topR = document.getElementById("topR4");
                midLine = document.getElementById("midM4");
                botLine = document.getElementById("botB4");
                botL = document.getElementById("botL4");
                botR = document.getElementById("botR4");
    
                topLineTriL = document.getElementById("topT4L");
                topLineTriR = document.getElementById("topT4R");
                topLTriT = document.getElementById("topL4T");
                topLTriB = document.getElementById("topL4B");
                topRTriT = document.getElementById("topR4T");
                topRTriB = document.getElementById("topR4B");
                midLineTriL = document.getElementById("midM4L");
                midLineTriR = document.getElementById("midM4R");
                botLineTriL = document.getElementById("botB4L");
                botLineTriR = document.getElementById("botB4R");
                botLTriT = document.getElementById("botL4T");
                botLTriB = document.getElementById("botL4B");
                botRTriT = document.getElementById("botR4T");
                botRTriB = document.getElementById("botR4B");
            }
        }
        currentRegVal = regHolder.getRegister[i];
        if(currentRegVal[3] == '1')//8 case in here (8,9,A,B,C,D,E,F)
        {
            if(currentRegVal[2] == '1')
            {
                if(currentRegVal[1] == '1')
                {

                    if(currentRegVal[0] == '1')//F
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'red';
                        topR.style.stroke = 'lightgrey';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'red';
                        botR.style.stroke = 'lightgrey';
                        botLine.style.stroke = 'lightgrey';

                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'red';
                        topLTriT.style.fill = 'red';
                        topRTriB.style.fill = 'lightgrey';
                        topRTriT.style.fill = 'lightgrey';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'red';
                        botLTriT.style.fill = 'red';
                        botRTriB.style.fill = 'lightgrey';
                        botRTriT.style.fill = 'lightgrey';
                        botLineTriL.style.fill = 'lightgrey';
                        botLineTriR.style.fill = 'lightgrey';
                    }
                    else//E
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'red';
                        topR.style.stroke = 'lightgrey';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'red';
                        botR.style.stroke = 'lightgrey';
                        botLine.style.stroke = 'red';

                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'red';
                        topLTriT.style.fill = 'red';
                        topRTriB.style.fill = 'lightgrey';
                        topRTriT.style.fill = 'lightgrey';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'red';
                        botLTriT.style.fill = 'red';
                        botRTriB.style.fill = 'lightgrey';
                        botRTriT.style.fill = 'lightgrey';
                        botLineTriL.style.fill = 'red';
                        botLineTriR.style.fill = 'red';
                    }
                }
                else
                {
                    if(currentRegVal[0] == '1')//D
                    {
                        topLine.style.stroke = 'lightgrey';
                        topL.style.stroke = 'lightgrey';
                        topR.style.stroke = 'red';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'red';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'red';

                        topLineTriL.style.fill = 'lightgrey';
                        topLineTriR.style.fill = 'lightgrey';
                        topLTriB.style.fill = 'lightgrey';
                        topLTriT.style.fill = 'lightgrey';
                        topRTriB.style.fill = 'red';
                        topRTriT.style.fill = 'red';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'red';
                        botLTriT.style.fill = 'red';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'red';
                        botLineTriR.style.fill = 'red';
                    }
                    else//C
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'red';
                        topR.style.stroke = 'lightgrey';
                        midLine.style.stroke = 'lightgrey';
                        botL.style.stroke = 'red';
                        botR.style.stroke = 'lightgrey';
                        botLine.style.stroke = 'red';

                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'red';
                        topLTriT.style.fill = 'red';
                        topRTriB.style.fill = 'lightgrey';
                        topRTriT.style.fill = 'lightgrey';
                        midLineTriL.style.fill = 'lightgrey';
                        midLineTriR.style.fill = 'lightgrey';
                        botLTriB.style.fill = 'red';
                        botLTriT.style.fill = 'red';
                        botRTriB.style.fill = 'lightgrey';
                        botRTriT.style.fill = 'lightgrey';
                        botLineTriL.style.fill = 'red';
                        botLineTriR.style.fill = 'red';
                    }
                }
            }
            else
            {
                if(currentRegVal[1] == '1')
                {
                    if(currentRegVal[0] == '1')//B
                    {
                        topLine.style.stroke = 'lightgrey';
                        topL.style.stroke = 'red';
                        topR.style.stroke = 'lightgrey';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'red';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'red';

                        topLineTriL.style.fill = 'lightgrey';
                        topLineTriR.style.fill = 'lightgrey';
                        topLTriB.style.fill = 'red';
                        topLTriT.style.fill = 'red';
                        topRTriB.style.fill = 'lightgrey';
                        topRTriT.style.fill = 'lightgrey';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'red';
                        botLTriT.style.fill = 'red';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'red';
                        botLineTriR.style.fill = 'red';
                    }
                    else//A
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'red';
                        topR.style.stroke = 'red';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'red';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'lightgrey';

                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'red';
                        topLTriT.style.fill = 'red';
                        topRTriB.style.fill = 'red';
                        topRTriT.style.fill = 'red';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'red';
                        botLTriT.style.fill = 'red';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'lightgrey';
                        botLineTriR.style.fill = 'lightgrey';
                    }
                }
                else
                {
                    if(currentRegVal[0] == '1')//9
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'red';
                        topR.style.stroke = 'red';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'lightgrey';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'lightgrey';

                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'red';
                        topLTriT.style.fill = 'red';
                        topRTriB.style.fill = 'red';
                        topRTriT.style.fill = 'red';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'lightgrey';
                        botLTriT.style.fill = 'lightgrey';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'lightgrey';
                        botLineTriR.style.fill = 'lightgrey';
                    }
                    else//8
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'red';
                        topR.style.stroke = 'red';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'red';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'red';

                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'red';
                        topLTriT.style.fill = 'red';
                        topRTriB.style.fill = 'red';
                        topRTriT.style.fill = 'red';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'red';
                        botLTriT.style.fill = 'red';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'red';
                        botLineTriR.style.fill = 'red';
                    }
                }
            }
        }
        else//8 Case in here, (0,1,2,3,4,5,6,7)
        {
            if(currentRegVal[2] == '1')
            {
                if(currentRegVal[1] == '1')
                {
                    if(currentRegVal[0] == '1')//7
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'lightgrey';
                        topR.style.stroke = 'red';
                        midLine.style.stroke = 'lightgrey';
                        botL.style.stroke = 'lightgrey';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'lightgrey';

                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'lightgrey';
                        topLTriT.style.fill = 'lightgrey';
                        topRTriB.style.fill = 'red';
                        topRTriT.style.fill = 'red';
                        midLineTriL.style.fill = 'lightgrey';
                        midLineTriR.style.fill = 'lightgrey';
                        botLTriB.style.fill = 'lightgrey';
                        botLTriT.style.fill = 'lightgrey';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'lightgrey';
                        botLineTriR.style.fill = 'lightgrey';
                    }
                    else//6
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'red';
                        topR.style.stroke = 'lightgrey';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'red';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'red';

                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'red';
                        topLTriT.style.fill = 'red';
                        topRTriB.style.fill = 'lightgrey';
                        topRTriT.style.fill = 'lightgrey';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'red';
                        botLTriT.style.fill = 'red';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'red';
                        botLineTriR.style.fill = 'red';
                    }
                }
                else
                {
                    if(currentRegVal[0] == '1')//5
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'red';
                        topR.style.stroke = 'lightgrey';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'lightgrey';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'red';

                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'red';
                        topLTriT.style.fill = 'red';
                        topRTriB.style.fill = 'lightgrey';
                        topRTriT.style.fill = 'lightgrey';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'lightgrey';
                        botLTriT.style.fill = 'lightgrey';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'red';
                        botLineTriR.style.fill = 'red';
                    }
                    else//4
                    {
                        topLine.style.stroke = 'lightgrey';
                        topL.style.stroke = 'red';
                        topR.style.stroke = 'red';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'lightgrey';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'lightgrey';

                        topLineTriL.style.fill = 'lightgrey';
                        topLineTriR.style.fill = 'lightgrey';
                        topLTriB.style.fill = 'red';
                        topLTriT.style.fill = 'red';
                        topRTriB.style.fill = 'red';
                        topRTriT.style.fill = 'red';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'lightgrey';
                        botLTriT.style.fill = 'lightgrey';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'lightgrey';
                        botLineTriR.style.fill = 'lightgrey';
                    }
                }
            }
            else
            {
                if(currentRegVal[1] == '1')
                {
                    if(currentRegVal[0] == '1')//3
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'lightgrey';
                        topR.style.stroke = 'red';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'lightgrey';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'red';

                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'lightgrey';
                        topLTriT.style.fill = 'lightgrey';
                        topRTriB.style.fill = 'red';
                        topRTriT.style.fill = 'red';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'lightgrey';
                        botLTriT.style.fill = 'lightgrey';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'red';
                        botLineTriR.style.fill = 'red';
                    }
                    else//2
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'lightgrey';
                        topR.style.stroke = 'red';
                        midLine.style.stroke = 'red';
                        botL.style.stroke = 'red';
                        botR.style.stroke = 'lightgrey';
                        botLine.style.stroke = 'red';

                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'lightgrey';
                        topLTriT.style.fill = 'lightgrey';
                        topRTriB.style.fill = 'red';
                        topRTriT.style.fill = 'red';
                        midLineTriL.style.fill = 'red';
                        midLineTriR.style.fill = 'red';
                        botLTriB.style.fill = 'red';
                        botLTriT.style.fill = 'red';
                        botRTriB.style.fill = 'lightgrey';
                        botRTriT.style.fill = 'lightgrey';
                        botLineTriL.style.fill = 'red';
                        botLineTriR.style.fill = 'red';
                    }
                }
                else
                {
                    if(currentRegVal[0] == '1')//1
                    {
                        topLine.style.stroke = 'lightgrey';
                        topL.style.stroke = 'lightgrey';
                        topR.style.stroke = 'red';
                        midLine.style.stroke = 'lightgrey';
                        botL.style.stroke = 'lightgrey';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'lightgrey';

                        topLineTriL.style.fill = 'lightgrey';
                        topLineTriR.style.fill = 'lightgrey';
                        topLTriB.style.fill = 'lightgrey';
                        topLTriT.style.fill = 'lightgrey';
                        topRTriB.style.fill = 'red';
                        topRTriT.style.fill = 'red';
                        midLineTriL.style.fill = 'lightgrey';
                        midLineTriR.style.fill = 'lightgrey';
                        botLTriB.style.fill = 'lightgrey';
                        botLTriT.style.fill = 'lightgrey';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'lightgrey';
                        botLineTriR.style.fill = 'lightgrey';
                    }
                    else//0
                    {
                        topLine.style.stroke = 'red';
                        topL.style.stroke = 'red';
                        topR.style.stroke = 'red';
                        midLine.style.stroke = 'lightgrey';
                        botL.style.stroke = 'red';
                        botR.style.stroke = 'red';
                        botLine.style.stroke = 'red';
                        
                        topLineTriL.style.fill = 'red';
                        topLineTriR.style.fill = 'red';
                        topLTriB.style.fill = 'red';
                        topLTriT.style.fill = 'red';
                        topRTriB.style.fill = 'red';
                        topRTriT.style.fill = 'red';
                        midLineTriL.style.fill = 'lightgrey';
                        midLineTriR.style.fill = 'lightgrey';
                        botLTriB.style.fill = 'red';
                        botLTriT.style.fill = 'red';
                        botRTriB.style.fill = 'red';
                        botRTriT.style.fill = 'red';
                        botLineTriL.style.fill = 'red';
                        botLineTriR.style.fill = 'red';
                    }
                }
            }
        }
    }
}

