import React, { useState } from "react";
import { Select, Input, Button } from "antd";
import { carTypesData } from "@/app/constants/arrays";
import { CarType } from "./bulkCar";

const CarSelector = ({
  selectedCars,
  setSelectedCars,
}: {
  selectedCars: CarType[];
  setSelectedCars: (cars: CarType[]) => void;
}) => {
  const [carType, setCarType] = useState("");
  const [model, setModel] = useState("");
  const [quantity, setQuantity] = useState<number>(1);

  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleAddCar = () => {
    if (!carType || !model || quantity <= 0) return;

    const newEntry = { carType, model, quantity };

    if (editIndex !== null) {
      const updated = [...selectedCars];
      updated[editIndex] = newEntry;
      setSelectedCars(updated);
      setEditIndex(null);
    } else {
      setSelectedCars([...selectedCars, newEntry]);
    }

    // Reset inputs
    setCarType("");
    setModel("");
    setQuantity(1);
  };

  const handleEdit = (index: number) => {
    const car = selectedCars[index];
    setCarType(car.carType);
    setModel(car.model);
    setQuantity(car.quantity);
    setEditIndex(index);
  };

  const handleDelete = (index: number) => {
    const updated = selectedCars.filter((_, i) => i !== index);
    setSelectedCars(updated);
    if (editIndex === index) {
      setCarType("");
      setModel("");
      setQuantity(1);
      setEditIndex(null);
    }
  };

  return (
    <div className="space-y-4 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select
          value={carType || undefined}
          placeholder="Select Car Type"
          onChange={(value) => {
            setCarType(value);
            setModel(""); // Reset model on carType change
          }}
          options={carTypesData.car_types.map((t) => ({
            label: t.type,
            value: t.type,
          }))}
        />

        <Select
          value={model || undefined}
          placeholder="Select Model"
          onChange={(value) => setModel(value)}
          disabled={!carType}
          options={
            carTypesData.car_types
              .find((t) => t.type === carType)
              ?.models.map((m) => ({ label: m, value: m })) || []
          }
        />

        <Input
          type="number"
          min={1}
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>

      <button
        className="border p-2 border-primaryGreen text-slate-700 hover:bg-primaryGreen hover:text-white font-bold duration-200 w-full rounded-full"
        onClick={handleAddCar}
      >
        {editIndex !== null ? "Update Car" : "+ Add Car"}
      </button>

      {selectedCars.length > 0 && (
        <div className="overflow-x-auto rounded-lg shadow-sm mt-6">
          <table className="min-w-full table-auto border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left">
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Car Type</th>
                <th className="px-4 py-2 border-b">Model</th>
                <th className="px-4 py-2 border-b text-center">Quantity</th>
                <th className="px-4 py-2 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {selectedCars.map((car, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition text-slate-500 text-sm"
                >
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{car.carType}</td>
                  <td className="px-4 py-2 border-b">{car.model}</td>
                  <td className="px-4 py-2 border-b text-center">
                    {car.quantity}
                  </td>
                  <td className="px-4 py-2 border-b space-x-2">
                    <Button size="small" onClick={() => handleEdit(index)}>
                      Edit
                    </Button>
                    <Button
                      danger
                      size="small"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CarSelector;
