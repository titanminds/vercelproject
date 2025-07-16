export const fetchData = async (url) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}${url}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  };
  