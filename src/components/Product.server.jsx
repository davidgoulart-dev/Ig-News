// src/components/Product.server.jsx

export async function getServerProduct() {
    try {
      const response = await fetch('/api/pricing')
      const data = await response.json()
      return data.product
      
    } catch (error) {
      console.error('Failed to fetch product data:', error)
      return null
    }
  }
  