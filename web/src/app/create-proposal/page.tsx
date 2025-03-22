"use client";

import { useState } from "react";
import { Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProposalForm = {
  title: string;
  description: string;
  fundingAmount: number;
  deadline: string;
  tags: string[];
};

export default function CreateProposalPage() {
  const [formData, setFormData] = useState<ProposalForm>({
    title: "",
    description: "",
    fundingAmount: 0,
    deadline: "",
    tags: [],
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ProposalForm, string>>
  >({});

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // Clear the error for this field when it's being edited
    if (errors[name as keyof ProposalForm]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }

    if (name === "fundingAmount") {
      // Handle number inputs
      const numValue = value === "" ? 0 : parseFloat(value);
      setFormData({
        ...formData,
        [name]: numValue,
      });
    } else {
      // Handle other inputs
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const newErrors: Partial<Record<keyof ProposalForm, string>> = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (formData.fundingAmount <= 0) {
      newErrors.fundingAmount = "Funding amount must be greater than 0";
    }

    if (!formData.deadline) {
      newErrors.deadline = "Deadline is required";
    } else {
      const deadlineDate = new Date(formData.deadline);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (deadlineDate < today) {
        newErrors.deadline = "Deadline cannot be in the past";
      }
    }

    setErrors(newErrors);

    // If no errors, proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      console.log("Form data:", formData);
      // Here you would typically send the data to your API
      alert("Proposal created successfully!");

      // Clear form
      setFormData({
        title: "",
        description: "",
        fundingAmount: 0,
        deadline: "",
        tags: [],
      });
    }
  };

  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-8 flex flex-col items-center">
        <div className="w-full max-w-xl">
          <h1 className="text-2xl font-bold mb-6">Create New Proposal</h1>

          <div className="bg-white rounded-xl border  p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Proposal Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                    errors.title ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter a clear, descriptive title"
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Describe your proposal in detail..."
                ></textarea>
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.description}
                  </p>
                )}
              </div>

              {/* Two-column layout for funding and deadline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Funding Amount */}
                <div>
                  <label
                    htmlFor="fundingAmount"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Funding Amount
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <DollarSign className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      id="fundingAmount"
                      name="fundingAmount"
                      value={formData.fundingAmount || ""}
                      onChange={handleChange}
                      min="0"
                      step="0.01"
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                        errors.fundingAmount
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="0.00"
                    />
                  </div>
                  {errors.fundingAmount && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.fundingAmount}
                    </p>
                  )}
                </div>

                {/* Deadline */}
                <div>
                  <label
                    htmlFor="deadline"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Voting Deadline
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                        errors.deadline ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  </div>
                  {errors.deadline && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.deadline}
                    </p>
                  )}
                </div>
              </div>

              {/* Tags */}

              {/* Submit Button */}
              <div className="flex justify-end">
                <Button type="submit" variant="primary">
                  Create Proposal
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
