export default class Utils
{

    static fetchTime(seconds:number): string{
        var speechText = "";
        for(var i:number=seconds; i>=1;i--){
            speechText = speechText + i + '<break time="300ms"/>'
        }
        return speechText;
    }
}
