let userReviewData = []

function submit(){ 

    

    const userName = document.getElementById("nameInput").value
    
    const emailInput = document.getElementById("emailInput").value
    
    const feedBackText = document.getElementById("feebackText").value

    const reviewStar = document.getElementById("Starsrating").value

    if(userName.trim() === ""||emailInput.trim() === ""|| feedBackText.trim() === ""|| reviewStar ==="NULL"){

    alert("Please fill all the options");
}
  
else{ 
    userReviewData.push({ name: userName, email: emailInput, feedback: feedBackText, rating: reviewStar });
    console.log(userReviewData);

    let reviewList =document.createElement("div")

    reviewList.innerHTML = `<p>
    <p><a class ="bold">Name</a> : ${userName}</p> 
    <p><a class="bold">feedback</a> : ${feedBackText}</p> 
    <p><a class = "bold">Rating</a> : <a class="gold">${reviewStar}</a></p>
    <button onclick = "del(this)">delete</button></p>`


     document.getElementById("nameInput").value = ""
    
    document.getElementById("emailInput").value = ""
    
    document.getElementById("feebackText").value = ""

    


    reviews.appendChild(reviewList)



}
}
function del(button){
    const reviewList = button.parentElement;
    reviewList.remove();

}

