document.addEventListener('DOMContentLoaded', () => {
    const trailLength = 10; // Number of dots in the trail
    const trailContainer = document.getElementById('trail-container');
    const trailElements = [];
  
    // Create trail elements
    for (let i = 0; i < trailLength; i++) {
      const dot = document.createElement('div');
      dot.classList.add('trail');
      trailContainer.appendChild(dot);
      trailElements.push(dot);
    }
  
    // Track mouse movement
    const mousePositions = Array(trailLength).fill({ x: 0, y: 0 });
  
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;
  
      // Add the current mouse position to the front of the array
      mousePositions.unshift({ x: clientX, y: clientY });
      mousePositions.pop(); // Remove the last position to maintain trail length
  
      // Update the positions of the trail dots
      trailElements.forEach((dot, index) => {
        if (mousePositions[index]) {
          dot.style.transform = `translate(${mousePositions[index].x}px, ${mousePositions[index].y}px)`;
        }
      });
    });
  });
