import axios from 'axios';

export default async function HelloPage() {
  let message = 'Error fetching message';

  try {
    const response = await axios.get('http://localhost:5000/hello');
    message = response.data.message;
  } catch (error) {
    console.error('Error:', error);
  }

  return (
    <div className="p-6 text-xl font-semibold text-blue-600">
      {message}
    </div>
  );
}
