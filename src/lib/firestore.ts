import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import { db } from "../config";

export const lawerList = [
  {
    address: "House No. 123, Street A",
    certificates: ["Certificate 1", "Certificate 2"],
    city: "Mumbai",
    degrees: ["B.Tech", "M.Tech"],
    email: "person1@example.com",
    mobile: "9876543210",
    name: "Person 1",
    state: "Maharashtra",
  },
  {
    address: "Apartment 456, Road B",
    certificates: [],
    city: "Delhi",
    degrees: ["B.Sc"],
    email: "person2@example.com",
    mobile: "8765432109",
    name: "Person 2",
    state: "Delhi",
  },
  {
    address: "Building 789, Lane C",
    certificates: ["Certificate 3"],
    city: "Bangalore",
    degrees: ["MBA"],
    email: "person3@example.com",
    mobile: "7654321098",
    name: "Person 3",
    state: "Karnataka",
  },
  {
    address: "Plot 101, Avenue D",
    certificates: [],
    city: "Chennai",
    degrees: ["B.A", "M.A"],
    email: "person4@example.com",
    mobile: "6543210987",
    name: "Person 4",
    state: "Tamil Nadu",
  },
  {
    address: "Flat 202, Complex E",
    certificates: ["Certificate 4", "Certificate 5"],
    city: "Kolkata",
    degrees: ["B.Com"],
    email: "person5@example.com",
    mobile: "5432109876",
    name: "Person 5",
    state: "West Bengal",
  },
  {
    address: "House 303, Street F",
    certificates: [],
    city: "Hyderabad",
    degrees: ["B.Tech"],
    email: "person6@example.com",
    mobile: "4321098765",
    name: "Person 6",
    state: "Telangana",
  },
  {
    address: "Villa 404, Road G",
    certificates: ["Certificate 6"],
    city: "Ahmedabad",
    degrees: ["MBA"],
    email: "person7@example.com",
    mobile: "3210987654",
    name: "Person 7",
    state: "Gujarat",
  },
  {
    address: "Apartment 505, Lane H",
    certificates: [],
    city: "Pune",
    degrees: ["B.Sc", "M.Sc"],
    email: "person8@example.com",
    mobile: "2109876543",
    name: "Person 8",
    state: "Maharashtra",
  },
  {
    address: "Building 606, Avenue I",
    certificates: ["Certificate 7"],
    city: "Surat",
    degrees: ["B.Com"],
    email: "person9@example.com",
    mobile: "1098765432",
    name: "Person 9",
    state: "Gujarat",
  },
  {
    address: "Plot 707, Complex J",
    certificates: [],
    city: "Jaipur",
    degrees: ["B.A"],
    email: "person10@example.com",
    mobile: "9988776655",
    name: "Person 10",
    state: "Rajasthan",
  },
  // ... (Repeat similar structure for 40 more entries with different cities and data)
  {
    address: "House 1001, Street K",
    certificates: ["Certificate 11", "Certificate 12"],
    city: "Lucknow",
    degrees: ["B.Tech", "M.Tech"],
    email: "person11@example.com",
    mobile: "9876512340",
    name: "Person 11",
    state: "Uttar Pradesh",
  },
  {
    address: "Apartment 1101, Road L",
    certificates: [],
    city: "Kanpur",
    degrees: ["B.Sc"],
    email: "person12@example.com",
    mobile: "8765412349",
    name: "Person 12",
    state: "Uttar Pradesh",
  },
  {
    address: "Building 1201, Lane M",
    certificates: ["Certificate 13"],
    city: "Nagpur",
    degrees: ["MBA"],
    email: "person13@example.com",
    mobile: "7654312348",
    name: "Person 13",
    state: "Maharashtra",
  },
  {
    address: "Plot 1301, Avenue N",
    certificates: [],
    city: "Indore",
    degrees: ["B.A", "M.A"],
    email: "person14@example.com",
    mobile: "6543212347",
    name: "Person 14",
    state: "Madhya Pradesh",
  },
  {
    address: "Flat 1401, Complex O",
    certificates: ["Certificate 14", "Certificate 15"],
    city: "Bhopal",
    degrees: ["B.Com"],
    email: "person15@example.com",
    mobile: "5432112346",
    name: "Person 15",
    state: "Madhya Pradesh",
  },
  {
    address: "House 1501, Street P",
    certificates: [],
    city: "Vadodara",
    degrees: ["B.Tech"],
    email: "person16@example.com",
    mobile: "4321012345",
    name: "Person 16",
    state: "Gujarat",
  },
  {
    address: "Villa 1601, Road Q",
    certificates: ["Certificate 16"],
    city: "Ghaziabad",
    degrees: ["MBA"],
    email: "person17@example.com",
    mobile: "3210912344",
    name: "Person 17",
    state: "Uttar Pradesh",
  },
  {
    address: "Apartment 1701, Lane R",
    certificates: [],
    city: "Ludhiana",
    degrees: ["B.Sc", "M.Sc"],
    email: "person18@example.com",
    mobile: "2109812343",
    name: "Person 18",
    state: "Punjab",
  },
  {
    address: "Building 1801, Avenue S",
    certificates: ["Certificate 17"],
    city: "Agra",
    degrees: ["B.Com"],
    email: "person19@example.com",
    mobile: "1098712342",
    name: "Person 19",
    state: "Uttar Pradesh",
  },
  {
    address: "Plot 1901, Complex T",
    certificates: [],
    city: "Nashik",
    degrees: ["B.A"],
    email: "person20@example.com",
    mobile: "9988712341",
    name: "Person 20",
    state: "Maharashtra",
  },
];

export async function searchFirestore(searchTerm: string) {
  try {
    const postsRef = collection(db, "lawyers_details");

    // Fetch all documents in the collection
    const querySnapshot = await getDocs(postsRef);
    const results = [];

    // Iterate over each document and check if the title includes the search term
    querySnapshot.forEach((doc) => {
      const postData = doc.data();
      console.log(postData, "adffds");
      const postText = postData.city.toLowerCase(); // Assuming we're searching the "title" field

      // Check if the title contains the searchTerm (case-sensitive match)
      if (postText && postText.includes(searchTerm)) {
        results.push({ id: doc.id, ...postData });
      }
    });

    // Return the matched results
    return results;
  } catch (error) {
    console.error("Error getting documents: ", error);
    return []; // Return an empty array in case of an error
  }
}

export async function addPeopleToFirestore(peopleData) {
  try {
    const batch = writeBatch(db); // Create a batch for efficient writes
    const collectionRef = collection(db, "lawyers_details"); // Reference to Firestore collection

    peopleData.forEach((person) => {
      const personRef = doc(collectionRef); // Create a new document with auto-generated ID
      batch.set(personRef, person); // Add person data to the batch
    });

    await batch.commit(); // Commit the batch write
    console.log("People data added to Firestore successfully!");
  } catch (error) {
    console.error("Error adding people data to Firestore:", error);
  }
}
