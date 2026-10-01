
document.addEventListener("DOMContentLoaded", () => {
  const bar = document.querySelector(".progress i");
  if(bar){
    const update=()=>{const h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%"}
    addEventListener("scroll",update); update();
  }

  const gate=document.getElementById("gate");
  const noBox=document.getElementById("noBox");
  const yes=document.getElementById("yesBtn");
  const no=document.getElementById("noBtn");
  const ok=document.getElementById("okBtn");

  if(gate){
    yes?.addEventListener("click",()=>{gate.classList.add("hidden");});
    no?.addEventListener("click",()=>{gate.classList.add("hidden");noBox.classList.remove("hidden");});
    ok?.addEventListener("click",()=>{noBox.classList.add("hidden");gate.classList.remove("hidden");});
  }

  document.querySelectorAll("[data-toast]").forEach(el=>{
    el.addEventListener("click",()=>{
      const t=document.getElementById("toast"); t.textContent=el.dataset.toast;
      t.classList.add("show"); setTimeout(()=>t.classList.remove("show"),2200);
    });
  });

  const photoInput=document.getElementById("photoInput");
  const photoSlot=document.getElementById("photoSlot");
  if(photoInput && photoSlot){
    photoInput.addEventListener("change",()=>{
      const file=photoInput.files?.[0]; if(!file)return;
      const url=URL.createObjectURL(file);
      const img=photoSlot.querySelector("img"); img.src=url; photoSlot.classList.add("has-photo");
      document.getElementById("photoHint").textContent="Your chosen memory is now glowing here ✨";
    });
  }

  document.querySelectorAll("[data-countdown]").forEach(el=>{
    const target=new Date(el.dataset.countdown).getTime();
    const tick=()=>{const diff=Math.max(0,target-Date.now()); const d=Math.floor(diff/864e5),h=Math.floor(diff/36e5)%24,m=Math.floor(diff/6e4)%60,s=Math.floor(diff/1e3)%60;el.textContent=`${d}d ${h}h ${m}m ${s}s`;};
    tick();setInterval(tick,1000);
  });

  const year=document.getElementById("year"); if(year) year.textContent=new Date().getFullYear();
});
