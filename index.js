

const search= document.getElementById("submit");



search.addEventListener("click", ()=>{
    


const role = document.getElementById('preferred-role').value.trim();
const location = document.getElementById('location').value.trim();



const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3d6e61b1ffmsh41f124696c27b7ep18a450jsn700255a7346e',
		'x-rapidapi-host': 'jsearch.p.rapidapi.com'
	}
};

const url = `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(role)}%20in%20${encodeURIComponent(location)}&num_pages=1`;


fetch(url,options)
.then(response=>response.json())
.then(data=>{
    const job = data.data && data.data.length > 0 ? data.data[0] : null;

    const loc = job ? job.job_city || location : location; 
    const title = job ? job.job_title || role : role; 
    // Salary is min-max or fallback text
    const salary = job ? 
        `${job.job_min_salary || "Not available"} - ${job.job_max_salary || "Not available"}` : 
        "Not available";

    // output (kept exactly your style)
    const output = document.getElementById("results"); 
    output.innerHTML = `
       <h3>TITLE : ${title}</h3>
       
       <h3>LOCATION: ${loc} </h3>
       <h3> SALARY : ${salary}</h3>`;
})

.catch(err => {
    console.error(err);
    alert("Something went wrong.");

})
}); 



