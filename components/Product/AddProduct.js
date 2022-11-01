import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Button from '../common/Button'
import { Close } from '../common/icons/Close'
import ProductForm from '../ProductForm'

const AddProduct = ({ props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => setIsOpen(false)
  const handleOpen = () => setIsOpen(true)
  const onFormSubmit = (data) => {
    console.log(data)
    handleClose()
  }

  return (
    <>
      <Button onClick={handleOpen} type="button" {...props}>
        Add Product
      </Button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-100 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-y-auto rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="text-lg flex items-center justify-between font-semibold leading-6 text-gray-800 mb-5"
                  >
                    <h3>Update Product</h3>
                    <Close onClick={handleClose} />
                  </Dialog.Title>

                  <ProductForm type={'Add'} onFormSubmit={onFormSubmit} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default AddProduct