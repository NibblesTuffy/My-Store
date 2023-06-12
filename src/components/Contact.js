import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Join our newsletter and get 20% off!!!</h3>
        <div className="content">
          <p>
            Aliquam est magna, pellentesque vitae aliquam eget, sagittis et
            orci. Sed tempor semper tempus. Quisque vehicula est mauris, luctus
            volutpat urna porta vitae. Integer tincidunt nisi leo, vitae feugiat
            metus convallis id. Aenean malesuada lorem eget nulla mattis, a
            accumsan ligula mattis. Duis ac pretium justo, vel mattis odio. Sed
            eget nisi a quam iaculis vulputate non eget nunc. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Pellentesque consequat risus leo, in condimentum dui
            aliquet et. Class aptent taciti sociosqu ad litora.
          </p>
          <form
            className="contact-form"
            action="https://formspree.io/f/xnqykdll"
            method="POST"
          >
            <input
              type="email"
              className="form-input"
              placeholder="please enter your email..."
              name='email'
            />
            <button type='submit' className='submit-btn'>subscript</button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact
