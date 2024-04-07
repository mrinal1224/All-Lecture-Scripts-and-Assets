// script.js
document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submitComment");
    const commentInput = document.getElementById("commentInput");
    const commentsContainer = document.getElementById("commentsContainer");

    submitBtn.addEventListener("click", () => {
        const commentText = commentInput.value.trim();
        if (commentText) {
            addComment(commentText);
            commentInput.value = ""; // Clear input field after adding
        }
    });

    // Using event delegation for reply and toggle functionality
    commentsContainer.addEventListener("click", (e) => {
        if (e.target.className.includes("replyBtn")) {
            const parentComment = e.target.parentElement;
            const replyInput = parentComment.querySelector(".replyInput");
            const replyText = replyInput.value.trim();
            if (replyText) {
                addReply(parentComment, replyText);
                replyInput.value = ""; // Clear input field after replying
            }
        } else if (e.target.className.includes("toggleReplies")) {
            const repliesContainer = e.target.nextElementSibling;
            repliesContainer.classList.toggle("collapsed");
        }
    });

    function addComment(text) {
        const commentElement = document.createElement("div");
        commentElement.className = "repliesContainer";
        commentElement.innerHTML = `
          <p>${text}</p>
          <button class="replyBtn">Reply</button>
          <div class="repliesContainer collapsed"></div>
          <textarea class="replyInput" placeholder="Write a reply..."></textarea>
      `;
        commentsContainer.appendChild(commentElement);
    }

    function addReply(parentComment, text) {
        // const repliesContainer =
        //   parentComment.querySelector(".repliesContainer");
        const replyElement = document.createElement("div");
        replyElement.className = "repliesContainer";
        replyElement.innerHTML = `<p>${text}</p>`;
        const btn = document.createElement("button");
        btn.className = "replyBtn";
        btn.innerText = "Reply";
        replyElement.appendChild(btn);
        const replyInput = document.createElement("textarea");
        replyInput.className = "replyInput";
        replyInput.placeholder = "Write a reply...";
        replyElement.appendChild(replyInput);
        parentComment.appendChild(replyElement);
        parentComment.classList.remove("collapsed");
    }
});