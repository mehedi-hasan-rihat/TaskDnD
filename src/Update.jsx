import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from 'react-hot-toast';
export default function Form() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: "",
        description: "",
   
    });

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const { data } = await axios(`${import.meta.env.VITE_URL}/task/${id}`);
                setFormData({
                    title: data.title || "",
                    description: data.description || "",
                });
                console.log("Fetched tasks:", data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };
    
        fetchTasks();
    }, [id]);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        const updateData = async () => {
            try {
                const { data } = await axios.put(`${import.meta.env.VITE_URL}/tasks/${id}`,{
                    title : formData.title, description : formData.description
                });
               console.log(data.modifiedCount);
               if (data && data.modifiedCount > 0) {
                toast.success("Task Updated");
                navigate('/')
              } else {
                toast.error("No changes made .");
              }
              

                console.log("Fetched tasks:", {title : formData.title, description : formData.description});
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };
    
        updateData();
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
            <h2 className="text-2xl font-semibold mb-4">Submit Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows="4"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                >
                    Update
                </button>
            </form>
            
        </div>
    );
}
