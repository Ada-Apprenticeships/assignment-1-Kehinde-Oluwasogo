// TODO: Implement the createLinkedList function
class Node {
  constructor(data) {
    this.data = data; // This stores the post object (text, timestamp, author)
    this.next = null; // This points to the next node (initially null)
  }
}
function createLinkedList(posts) {
  let head = null;
  let current = null;

  // TODO: Check if the input 'posts' is valid (an array with at least one element)#
  if (!Array.isArray(posts)){
    throw new Error("must be an array");
    
  }
  // TODO: Iterate through each post in the 'posts' array
  for (const post in posts){
    if(
      typeof post !== 'object'|| typeof post.text !== 'string'|| typeof post.timestamp !== 'string'|| typeof post.author !== 'string'||
      post.text.trim() === '' ||post.author.trim() === '' ||isNaN(Date.parse(post.timestamp))
    ){
      throw new Error()
    }
  }
  // TODO: Validate the structure of each post (ensure it has 'text', 'timestamp', and 'author' properties with correct types and values)
  // TODO: If any post has an invalid structure, throw an error
  // TODO: Create the linked list with the validated posts
  // TODO: Return the head of the linked list
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
