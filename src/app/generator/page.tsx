"use client";

import React, { useState } from "react";
import { Copy, CheckCircle2, Type, Plus, Trash2 } from "lucide-react";

type Product = {
  namaProduk: string;
  kemasan: string;
  bahan: string;
};

type SubmissionType = "PERORANGAN" | "BADAN_USAHA";
type MinimalistOption = "NONE" | "OPSI_1" | "OPSI_2" | "OPSI_3" | "OPSI_4";

const generateText = (
  brandName: string,
  products: Product[],
  submissionType: SubmissionType,
  minimalistOption: MinimalistOption,
  businessEntity: string
): string => {
  let header = "Dear Customer,\n\n";

  switch (submissionType) {
    case "PERORANGAN":
      if (minimalistOption === "NONE") {
        header += `Berikut kami kirimkan artwork desain label merk ${brandName} dengan pengajuan perorangan dengan nama produk:\n\n`;
      } else {
        const optionNumber = minimalistOption.split("_")[1];
        header += `Berikut kami kirimkan artwork Minimalist Opsi ${optionNumber} desain label merk ${brandName} dengan pengajuan perorangan dengan nama produk:\n\n`;
      }
      break;
    case "BADAN_USAHA":
      if (minimalistOption === "NONE") {
        header += `Berikut kami kirimkan artwork desain label merk ${brandName} dengan pengajuan Badan Usaha ${businessEntity} dengan nama produk:\n\n`;
      } else {
        const optionNumber = minimalistOption.split("_")[1];
        header += `Berikut kami kirimkan artwork Minimalist Opsi ${optionNumber} desain label merk ${brandName} dengan pengajuan Badan Usaha ${businessEntity} dengan nama produk:\n\n`;
      }
      break;
  }

  const productList = products
    .map(
      (product, index) => `${index + 1}. ${brandName} ${product.namaProduk}
- Kemasan ${product.kemasan}
- Bahan ${product.bahan}
`
    )
    .join("\n");

  return header + productList;
};

const emptyProduct: Product = {
  namaProduk: "",
  kemasan: "",
  bahan: "",
};

function App() {
  const [brandName, setBrandName] = useState("");
  const [products, setProducts] = useState<Product[]>([{ ...emptyProduct }]);
  const [copied, setCopied] = useState(false);
  const [submissionType, setSubmissionType] =
    useState<SubmissionType>("PERORANGAN");
  const [minimalistOption, setMinimalistOption] =
    useState<MinimalistOption>("NONE");
  const [businessEntity, setBusinessEntity] = useState("");

  const addProduct = () => {
    setProducts([...products, { ...emptyProduct }]);
  };

  const removeProduct = (index: number) => {
    if (products.length > 1) {
      setProducts(products.filter((_, i) => i !== index));
    }
  };

  const updateProduct = (
    index: number,
    field: keyof Product,
    value: string
  ) => {
    const newProducts = [...products];
    newProducts[index] = { ...newProducts[index], [field]: value };
    setProducts(newProducts);
  };

  const handleCopy = async () => {
    const text = generateText(
      brandName,
      products,
      submissionType,
      minimalistOption,
      businessEntity
    );
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6 text-black">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Type className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-800">Text Generator</h1>
          </div>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="brandName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Brand Name
              </label>
              <input
                type="text"
                id="brandName"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Enter brand name..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Submission Type
              </label>
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="PERORANGAN"
                      checked={submissionType === "PERORANGAN"}
                      onChange={(e) =>
                        setSubmissionType(e.target.value as SubmissionType)
                      }
                      className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <span className="ml-2">Perorangan</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="BADAN_USAHA"
                      checked={submissionType === "BADAN_USAHA"}
                      onChange={(e) =>
                        setSubmissionType(e.target.value as SubmissionType)
                      }
                      className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <span className="ml-2">Badan Usaha</span>
                  </label>
                </div>

                <div className="mt-3 space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Minimalist Option
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="NONE"
                        checked={minimalistOption === "NONE"}
                        onChange={(e) =>
                          setMinimalistOption(
                            e.target.value as MinimalistOption
                          )
                        }
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      />
                      <span className="ml-2">None</span>
                    </label>
                    {["OPSI_1", "OPSI_2", "OPSI_3", "OPSI_4"].map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="radio"
                          value={option}
                          checked={minimalistOption === option}
                          onChange={(e) =>
                            setMinimalistOption(
                              e.target.value as MinimalistOption
                            )
                          }
                          className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                        />
                        <span className="ml-2">
                          Opsi {option.split("_")[1]}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {submissionType === "BADAN_USAHA" && (
                  <input
                    type="text"
                    value={businessEntity}
                    onChange={(e) => setBusinessEntity(e.target.value)}
                    placeholder="Enter business entity name..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-700">
                  Products
                </h2>
              </div>

              {products.map((product, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-gray-700">
                      Product {index + 1}
                    </h3>
                    {products.length > 1 && (
                      <button
                        onClick={() => removeProduct(index)}
                        className="text-red-500 hover:text-red-700"
                        title="Remove product"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Produk
                      </label>
                      <input
                        type="text"
                        value={product.namaProduk}
                        onChange={(e) =>
                          updateProduct(index, "namaProduk", e.target.value)
                        }
                        placeholder="e.g., Body Lotion 12.5g"
                        className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Kemasan
                      </label>
                      <input
                        type="text"
                        value={product.kemasan}
                        onChange={(e) =>
                          updateProduct(index, "kemasan", e.target.value)
                        }
                        placeholder="e.g., Pot Putih 12.5g"
                        className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bahan
                      </label>
                      <input
                        type="text"
                        value={product.bahan}
                        onChange={(e) =>
                          updateProduct(index, "bahan", e.target.value)
                        }
                        placeholder="e.g., Putih Glossy"
                        className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button
                onClick={addProduct}
                className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Product
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Generated Text
              </label>
              <div className="relative">
                <div className="w-full min-h-[80px] px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg whitespace-pre-wrap">
                  {generateText(
                    brandName,
                    products,
                    submissionType,
                    minimalistOption,
                    businessEntity
                  )}
                </div>
                <button
                  onClick={handleCopy}
                  disabled={
                    !brandName ||
                    products.some(
                      (p) => !p.namaProduk || !p.kemasan || !p.bahan
                    ) ||
                    (submissionType === "BADAN_USAHA" && !businessEntity)
                  }
                  className="absolute right-2 top-2 p-2 text-gray-600 hover:text-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
