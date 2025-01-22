class Node {
  constructor(data, next = null) {
    this.data = data; // This stores the post object (text, timestamp, author)
    this.next = next; // This points to the next node (initially null)
  }
}

function createLinkedList(posts) {
  // Check if the input 'posts' is valid (an array with at least one element)
  if (!Array.isArray(posts) || posts.length === 0) {
    throw new Error("Input must be a non-empty array");
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



// TODO: Implement the searchSocialMediaFeed function
function searchSocialMediaFeed(feed, keyword) {
  // TODO: Handle the case where the feed is empty
  // TODO: Initialise an empty array to store the search results
  // TODO: Normalise the keyword for case-insensitive search
  // TODO: Split the keyword into individual words
  // TODO: Traverse the linked list
  // TODO: Normalise the text of the current post for case-insensitive search
  // TODO: Split the text of the current post into individual words
  // TODO: Check if any keyword word is partially present in any text word
  // TODO: If there's a partial match, add the current post to the results
  // TODO: Return the array of search results
}

// ADDITIONAL TODO - The suggested functions above can be refactored into multiple functions if you think appropriate.


export default {createLinkedList, searchSocialMediaFeed};
