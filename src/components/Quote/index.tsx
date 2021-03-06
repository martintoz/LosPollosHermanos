import React from "react";
import { StyledQuote } from "./StyledQuote";

export interface quote {
  text: string;
  quotationMarks?: boolean;
  author?: string;
}

function Quote({ quotationMarks, text, author }: quote) {
  return (
    <StyledQuote>
      <div className="quote">
        {quotationMarks ? (
          <>
            <div className="openQuote">“</div>
            <div className="closeQuote">”</div>
          </>
        ) : (
          <></>
        )}
        {text}
        <br />
        <span>{author}</span>
      </div>
    </StyledQuote>
  );
}

export default Quote;
