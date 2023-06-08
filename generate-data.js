<script type="module">
  import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

  // Generate the data
  const data = {
    name: faker.person.fullName(),
    address: faker.internet.email(),

  };

  // Number of records to generate
  const numRecords = 100;
  // Array to store the generated records
  const records = [];

  for (let i = 0; i < numRecords; i++) {
    const record = {
      name: faker.person.fullName(),
      DOB:faker.date.anytime(),
      address: {
        street: faker.address.streetAddress(),
        country: faker.address.country(),
        city: faker.address.city(),        
        state: faker.address.state()
      } ,
      subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
    };
    records.push(record);
  }
  // Convert the data to JSON format
  const jsonData = JSON.stringify(records, null, 2);

  // Create a Blob object with the JSON data
  const blob = new Blob([jsonData], { type: 'application/json' });

  // Create a URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create a link element
  const link = document.createElement('a');
  link.href = url;
  link.download = 'data.json';

  // Simulate a click on the link to trigger the file download
  link.click();

  // Clean up by revoking the object URL
  URL.revokeObjectURL(url);

  // Caitlyn Kerluke
  const randomName = faker.person.fullName();

  // Rusty@arne.info
  const randomEmail = faker.internet.email();
  console.log(randomEmail)
</script>
