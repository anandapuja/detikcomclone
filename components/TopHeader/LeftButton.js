export default function LeftButton() {
  return (
    <div class="border-l border-gray-100 hidden sm:flex">
      <div className="bg-blue-900 text-white py-1 px-4 rounded-3xl mx-1 flex items-center justify-center hover:bg-blue-700 cursor-pointer transition duration-500">
        Daftar DetikId
      </div>
      <div className="text-blue-900 border-2 rounded-3xl border-blue-900 py-1 px-4 mx-1 flex items-center justify-center hover:bg-blue-900 hover:text-white cursor-pointer transition duration-500">
        Masuk
      </div>
    </div>
  );
}
