import React from 'react';

import Text from '../components/Text/Text';

const Contact = () => {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Entre em contato comigo</h2>
        <p className="mt-2 text-lg/8 text-gray-200">Em que eu posso ajudar você?</p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-white">Email</label>
            <Text text="anacarolinaleite1401@gmail.com" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-white">Número de telefone</label>
            <Text text="(11) 93291-4810" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;