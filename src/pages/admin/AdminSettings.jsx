import React from 'react';
import { Save, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";

const AdminSettings = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Paramètres</h1>

            <div className="grid gap-6 max-w-2xl">
                <div className="bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                            <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Meta Pixel (Facebook)</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Configurez votre pixel Facebook pour le tracking.</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Activer le Pixel</span>
                            <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                            </div>
                            {/* Simple toggle checkbox styling needed or use a component */}
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                            </label>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Pixel ID</label>
                            <input
                                type="text"
                                placeholder="ex: 123456789012345"
                                className="w-full px-3 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 font-mono"
                                defaultValue="8492018492"
                            />
                            <p className="text-xs text-gray-500">
                                L'ID de votre pixel se trouve dans le Gestionnaire d'événements Facebook.
                            </p>
                        </div>

                        <Button className="bg-black text-white dark:bg-white dark:text-black">
                            <Save className="w-4 h-4 mr-2" />
                            Sauvegarder
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;
