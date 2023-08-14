function timeconvert(){
    var seconds=document.getElementById('inp').value;
    const days=Math.floor(seconds/86400)
    const hours=Math.floor(seconds/3600);
    const minutes=Math.floor((seconds%3600)/60);
    const remind=seconds%60;
    let ans=document.createElement('h3');
    ans.innerHTML=(`${days} Day, ${hours} Hours, ${minutes} Minutes, ${remind} Seconds`);
    document.body.appendChild(ans);
    ans.id='ans'

}

