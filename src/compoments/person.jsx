export default function Person({ name, image, role }) {
  return (
    <div className="bg-white/70 backdrop-blur-md w-70 h-75 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
      />
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}
