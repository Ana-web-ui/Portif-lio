import React from 'react';
import { EnvelopeIcon, PhoneIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#EEAECA] via-[#DEB0D0] via-[#C9B3D7] via-[#B0B7E0] to-[#94BBE9] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h1 className="text-4xl font-bold text-white mb-6 text-center">Entre em contato comigo</h1>
          
          <p className="text-xl text-gray-200 mb-8 text-center">Em que eu posso ajudar você?</p>
          
          <div className="space-y-6">
            {/* Seção de Email */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
                <EnvelopeIcon className="h-6 w-6" />
                Email:
              </h2>
              <div className="mt-2.5 relative">
                <a 
                  href="mailto:anacarolinaleite1401@gmail.com" 
                  className="text-gray-200 bg-white/20 rounded-lg p-4 text-lg pr-12 block hover:bg-white/30 transition"
                >
                  anacarolinaleite1401@gmail.com
                </a>
                <button 
                  onClick={() => copyToClipboard('anacarolinaleite1401@gmail.com')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white"
                  title="Copiar email"
                >
                  <DocumentDuplicateIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Seção de Telefone */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
                <PhoneIcon className="h-6 w-6" />
                Telefone:
              </h2>
              <div className="mt-2.5 relative">
                <a 
                  href="tel:+5511932914810" 
                  className="text-gray-200 bg-white/20 rounded-lg p-4 text-lg pr-12 block hover:bg-white/30 transition"
                >
                  (11) 93291-4810
                </a>
                <button 
                  onClick={() => copyToClipboard('(11) 93291-4810')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white"
                  title="Copiar telefone"
                >
                  <DocumentDuplicateIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;