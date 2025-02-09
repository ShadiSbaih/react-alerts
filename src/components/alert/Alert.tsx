import { ReactNode } from "react";
import "./index.scss";
import { X } from 'lucide-react';
import { AlertTypes } from "../../types";

interface IAlert {
  AlertType: AlertTypes;
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function Alert({ AlertType, icon, title, description, children }: IAlert) {
  return (
    <div className={AlertType}>
      <div className="alert-header">
        <div className="title">
          <span>
            {icon}
          </span>
          <h2>{title}</h2>
        </div>
        <span>
          <X size={25} />
        </span>
      </div>

      {children ? children : <p> {description} </p>}

    </div>
  );
}
