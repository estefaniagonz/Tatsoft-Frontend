import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { IoStorefrontSharp } from "react-icons/io5";
import { FaAirFreshener } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaChartColumn } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";
import { FaClipboardList } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { RiUserAddFill } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { GrMoney } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";

const iconos = {
  buscar: IoSearch,
  notificaciones: IoIosNotifications,
  "gest-usuarios": FaUserEdit,
  "gest-clientes": IoStorefrontSharp,
  "gest-produtos": FaAirFreshener,
  "gest-zonas": FaMapLocationDot,
  "gest-acumulados": FaChartColumn,
  catalogo: LuClipboardList,
  inventario: FaClipboardList,
  "cerrar-sesion": MdLogout,
  "registrar-usuario": RiUserAddFill,
  opciones: SlOptionsVertical,
  "subir-archivo": MdOutlineFileUpload,
  cancelar: MdCancel,
  volver: IoArrowBackCircleSharp,
  preventa: GrMoney,
  despliegue: FaChevronDown,
  eliminar: AiFillDelete,
  confirmar: BsFillCheckCircleFill,
  eliminarAlert:TiDelete
};

const Icono = ({ name, size = 23, color = "#52307C", className = "" }) => {
  const finalColor = (() => {
    switch (name) {
      case "cerrar-sesion":
        return "white";
      case "eliminar":
        return "#F48783";
      case "volver":
        return "white";
      case "confirmar":
        return "#A5F6A5";
      case "eliminarAlert":
        return "#E24C4B";
      default:
        return color;
    }
  })();

  const finalSize = name === "cerrar-sesion" ? size * 1.1 : size;

  const IconComponent = iconos[name];

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      {IconComponent ? (
        <IconComponent size={finalSize} color={finalColor} />
      ) : (
        <p>Icono no encontrado</p>
      )}
    </div>
  );
};

export default Icono;
