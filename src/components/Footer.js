import React from 'react'

const Footer = () => {
  return (
    <footer style={{
        position: "absolute",
        bottom: "0",
        backgroundColor: "var(--color-2)",
    }}>
        <form>
            <h2>Subscribe to our newsletter for signals</h2>
            <input type="email"/>
        </form>
    </footer>
  )
}

export default Footer