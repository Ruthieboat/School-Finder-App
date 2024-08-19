import React, { useEffect, useState } from 'react'
import SchoolCard from '../../components/schoolCard'
import { SearchIcon } from 'lucide-react'
import data from '../.././schools.json'

const PresentPage = () => {
  const [schools, setSchools] = useState(null)
  const [input, setInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.length > 0) {
      const filtered = schools.filter(school =>
        school.name.toLowerCase().includes(value.toLowerCase()) ||
        school.location.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults([]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('')
        // const jsonData = await response.json()
        setSchools(data)
        console.log(data)
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <span className='flex items-center'>
        <input
          type="Search"
          value={input}
          onChange={handleChange}
          className='relative w-full h-12 border-gray-500 mx-16 px-7 border-2 rounded-3xl focus:outline-none hover:shadow-2xl' placeholder='Search...' />
        <SearchIcon size={28} className='absolute mx-16 text-[#290F66] font-semibold' />
      </span>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-6 px-5'>
        {
          input.length === 0 ?
            schools?.map((school) => (
              <SchoolCard
                key={school.name}
                image={school.pictures[0] ?? "../assets/images/schbu3.jpg"}
                schoolName={school.name}
                location={school.location}
                number={school.whatsapp_link}
              />
            ))
            :
            filteredResults?.map((school) => (
              <SchoolCard
                key={school.name}
                image={school.pictures[0] ?? "../assets/images/schbu3.jpg"}
                schoolName={school.name}
                location={school.location}
                number={school.whatsapp_link}
              />
            ))
          }
          {
            input.length > 0 && filteredResults.length === 0 && (
              <h1 className='text-2xl font-bold '>No results found</h1>
            )
          }
      </div>
    </>
  )
}

export default PresentPage
