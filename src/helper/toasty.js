import { toast } from "react-toastify";

export const notify = (type, message, position) => {
  toast(message, {
    type,
    position,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const promiseMessage = async (method, pending, success, error) => {
    return await toast.promise(
        method,
        {
            pending: {
                render() {
                    return pending;
                },
                theme: "light",
            },
            success: {
                render({data}) {
                    console.log(data);
                    return success;
                },
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            },
            error: {
                render({data}) {
                    console.log(data);
                    return error;
                },
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }
        }
    )
}
