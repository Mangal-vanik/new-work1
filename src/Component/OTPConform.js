import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Style } from "@mui/icons-material";

function OTPConform() {
  const [name, setName] = useState("");

  return (
    <div>
      <div style={Style}>
        <div sx={{ xs: 12, md: 8 }} style={{ textAlign: "center" }}>
          <div className="addButton">
            <Typography
              sx={{ sm: "30px", md: "40px" }}
              variant="h1"
              fontWeight="bold"
            >
              rise
              <CheckCircleIcon
                style={{ color: "blue", fontSize: "75px", marginLeft: "10px" }}
              />
            </Typography>
          </div>

          <Typography
            variant="h4"
            style={{
              color: "black",
              fontWeight: "initial",
              margin: "20px",
              padding: "20px",
            }}
          >
            every time new job
          </Typography>
          <form sx={{ xs: 12, md: 8 }}>
            <input
              style={{
                width: "300px",
                height: "30px",
                backgroundColor: "e3e9ff",
                borderRadius: "10px",
                marginBottom: "10px",
                padding: "15px",
                textAlign: "center",
              }}
              type="text"
              value={name}
              placeholder="Enter OTP"
              onChange={(e) => setName(e.target.value)}
            />
            <br />

            <br />
            <Button
              type="button"
              style={{
                width: "330px",
                height: "30px",
                color: "white",
                backgroundColor: "blue",
                borderRadius: "10px",
                margin: "15px",
                padding: "30px",
                fontSize: "20px",

                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Proceed
            </Button>
          </form>
          <Typography style={{ color: "grey" }}>
            Recet OTP in{" "}
            <span style={{ color: "black", fontWeight: "bold" }}>Now</span>
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default OTPConform;
