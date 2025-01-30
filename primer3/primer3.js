class Node {
  constructor(data, next = null) {
    this.data = data; // This stores the post object (text, timestamp, author)
    this.next = next; // This points to the next node (initially null)
  }
}

function createLinkedList(posts) {
  // Check if the input 'posts' is valid (an array with at least one element)
  if (!Array.isArray(posts) || posts.length === 0) {
    // throw new Error("Input must be a non-empty array");
    return null;
  }

  // Validate the structure of each post
  for (const post of posts) {
    if (
      typeof post !== "object" ||
      typeof post.text !== "string" ||
      typeof post.timestamp !== "string" ||
      typeof post.author !== "string" ||
      post.text.trim() === "" ||
      post.author.trim() === "" ||
      isNaN(Date.parse(post.timestamp)) // Ensure 'timestamp' is a valid date
    ) {
      throw new Error("Invalid post structure");
    }
  }

  // Create the linked list with the validated posts
  let head = null;
  let current = null;

  for (const post of posts) {
    const node = new Node(post);

    if (!head) {
      head = node; // Initialize the head of the linked list
    } else {
      current.next = node; // Link the current node to the new node
    }

    current = node; // Move the current pointer to the new node
  }

  return head; // Return the head of the linked list
}

function searchSocialMediaFeed(feed, keyword) {
  if (!feed || !keyword || typeof keyword !== "string") {
    throw new Error(
      "feed must not be empty,keyword must not be empty and ensure keyword is a string"
    );
  }

  const results = [];

  const normalisedKeyword = keyword.toLowerCase();
  const keywordToWords = normalisedKeyword.split(/\s+/);
  let current = feed;
  while (current) {
    const postText = current.data.text.toLowerCase();

    // Split the text of the current post into individual words
    const postWords = postText.split(/\s+/);
    
    let isMatch = false;

    for (let i = 0; i < keywordToWords.length; i++) {
      const keywordWords = keywordToWords[i];

      // Check if the current keyword word matches any word in the post
      for (let j = 0; j < postWords.length; j++) {
        const postWord = postWords[j];

        // If the post word contains the keyword word, we have a match
        if (postWord.includes(keywordWords)) {
          isMatch = true;
          break; // No need to check further words in this post for the current keyword word
        }
      }

      // If we found a match, break out of the loop for checking other keyword words
      if (isMatch) {
        break;
      }
    }

    // If there's a partial match, add the current post to the results
    if (isMatch) {
      results.push(current.data);
    }

    // Move to the next node
    current = current.next;
  }
  return results;
}


export { createLinkedList, searchSocialMediaFeed };
