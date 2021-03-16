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

function uiMode(){
    var viewSw = document.getElementById("bit00");
    var gameSw = document.getElementById("bit01");

    if(gameSw.checked)//Game Mode
    {
        //Need
    }
    else{//View Mode, ignored if we are in game mode

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
