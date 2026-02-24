let interviewlist = [];
let rejectlist = [];


let total = document.getElementById('total');
let interviewcount = document.getElementById('interviewcount');
let rejectcount = document.getElementById('rejectcount');

const allcardsection = document.getElementById('allcard');
const maincontainer = document.querySelector('main');

const allfilterbtn = document.getElementById('allfilterbtn');
const interviewfilterbtn = document.getElementById('interviewfilterbtn');
const rejectfilterbtn = document.getElementById('rejectfilterbtn');



function calculatecount()
{
    total.innerText = allcardsection.children.length;
    interviewcount.innerText = interviewlist.children.length;
    rejectcount.innerText = rejectlist.children.length;
}
calculatecount()

function toggleStyle(id){
    allfilterbtn.classList.remove('bg-blue-500','text-white')
    interviewfilterbtn.classList.remove('bg-blue-500','text-white')
    rejectfilterbtn.classList.remove('bg-blue-500','text-white')

    allfilterbtn.classList.add('bg-slate-100','text-black')
    interviewfilterbtn.classList.add('bg-slate-100','text-black')
    rejectfilterbtn.classList.add('bg-slate-100','text-black')
    
    const selected = document.getElementById(id)
    selected.classList.remove('bg-slate-100','text-black');
    selected.classList.add('bg-blue-500','text-white')
}
