//this script handles various aspects of a blogging web application, including submitting new posts, fetching existing posts, displaying them on the page, handling pop-up windows, and implementing a "Read more" feature for expanding and collapsing post content.







function playRandomSound() {
    var sounds = ["pawSound1", "pawSound2", "pawSound3"];
    var randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    document.getElementById(randomSound).play();
}

async function BloggingData(event) {
    event.preventDefault(); 

    const name = document.getElementById('userName').value;
    const age = document.getElementById('userAge').value;
    const blog = document.getElementById('userBlog').value;

    //data validation
    if (!name || !age || !blog) {
        alert('Please fill in all required fields');
        return;
    }

    // Send data to backend for storage
    try {
        const response = await fetch('/submit-blog-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                age,
                blog
            })
        });

        if (response.ok) {
            alert('Blog posted successfully!');
            window.location.href = 'blog.html';
        } else {
            alert('Submission failed. Please try again later.');
        }
    } catch (error) {
        console.error('Error submitting blog data:', error);
        alert('An unexpected error occurred. Please try again later.');
    }
}

async function fetchBlogPosts() {
    try {
        const response = await fetch('/fetch-blog-posts');
        const data = await response.json();
        
        // Check if response is successful
        if (response.ok) {
            // Call function to display the blog posts on the page
            displayBlogPosts(data);
        } else {
            console.error('Failed to fetch blog posts:', data.error);
        }
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }
}


//This function dynamically creates HTML elements to display the fetched blog posts on the page. It loops through the array of posts, creates HTML elements for each post's title, age, and content, formats the content, and appends them to the DOM.
function displayBlogPosts(posts) {
    const blogList = document.getElementById('blogList');
    
    // Loop through the posts and create HTML elements to display them
    posts.forEach((post, index) => {
        // Create a blog post container
        const postContainer = document.createElement('div');
        postContainer.classList.add('blog-post-container');
        
        // Create a blog post element
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        
        // Create elements for title, age, and content
        const titleElement = document.createElement('h3');
        const ageElement = document.createElement('p');
        titleElement.textContent = `- ${post.name} ,${post.age}`;
        
        // const ageElement = document.createElement('p');
        // ageElement.textContent = Age: ${post.age};
        
        const contentElement = document.createElement('p');
        // Split the content into the first line and the rest
        const contentLines = post.blog.split('\n');
        const firstLine = contentLines[0];
        const restOfContent = contentLines.slice(1).join('\n');
        
        // Apply styles to the first line and the rest of the content
        const formattedContent = `<span style="color: green; font-size: larger; text-decoration: underline;">${firstLine}</span><br><br>${restOfContent}`;
        contentElement.innerHTML = formattedContent;
        
        // Append elements to the post
        
        postElement.appendChild(contentElement);
        postElement.appendChild(titleElement);
        postElement.appendChild(ageElement);
        
        // Append the post to the container
        postContainer.appendChild(postElement);

        // Append the container to the blog list
        blogList.appendChild(postContainer);

        // Apply styles to the post container based on index
        if ((index + 1) % 3 === 0) {
            // Add a clear fix for every third post to start a new row
            postContainer.classList.add('clear-fix');
        }
    });
}

// Call fetchBlogPosts when the page loads
window.onload = fetchBlogPosts;

// JavaScript for opening and closing the pop-up
const openPopupBtn = document.getElementById('openPopup');
const closePopupBtn = document.getElementById('closePopup');
const blogPopup = document.getElementById('blogPopup');

openPopupBtn.addEventListener('click', function() {
    // Toggle the display of the pop-up
    if (blogPopup.style.display === 'block') {
        blogPopup.style.display = 'none';
    } else {
        blogPopup.style.display = 'block';
    }
});
closePopupBtn.addEventListener('click', function() {
    blogPopup.style.display = 'none';
});



// JavaScript for "Read more" functionality
function toggleReadMore(element) {
    const content = element.previousElementSibling;
    const btnText = element.innerText;

    if (content.style.maxHeight) {
        // Contract the content
        content.style.maxHeight = null;
        element.innerText = 'Read more';
    } else {
        // Expand the content
        content.style.maxHeight = content.scrollHeight + 'px';
        element.innerText = 'Read less';
    }
}
function toggleChat() {
    var chatBox = document.getElementById('chat-box');
    chatBox.classList.toggle('hidden');
  }
  
  